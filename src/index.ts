import express, { Request, Response } from "express";
import { Router, json } from "express";

interface IUseCase {
    perform() : string;
}

interface IRepositorio {
    get(): string;
}

class Repositorio implements IRepositorio {
    get() {
        console.log('repositorio')
        return 'repositorio';
    }
}

class UseCase implements IUseCase {
    repo: IRepositorio;
    constructor(repo: IRepositorio) {
        this.repo = repo;
    }
    perform() {
        console.log('use case')
        return this.repo.get();
    }
}

class Contorlador {
    usecase: IUseCase;
    constructor(usecase: IUseCase) {
        this.usecase = usecase;
    }

    handler(req: Request, resp: Response) {
        console.log('chegou requisição')
        const retorno = this.usecase.perform();
        resp.json({ message: retorno}).end();
    }
}

function Fabrica_De_Controladores() {

    const repositorio = new Repositorio();
    const usecase = new UseCase(repositorio);
    const controlador = new Contorlador(usecase);
    return controlador;
}

function cria_rota() {

    const router = express.Router();
    const controlador = Fabrica_De_Controladores();
    router.get("/", controlador.handler.bind(controlador));
    return router;
}


const app = express();

const router = cria_rota();

app.use(express.json());
app.use(router);

app.listen(3000, () => {
    console.log("Listening on port 3000");
});
