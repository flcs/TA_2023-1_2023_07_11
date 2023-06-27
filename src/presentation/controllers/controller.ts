import { Request, Response } from 'express';
import { IUseCase } from '../../domain/contratos/iusecase';


class Contorlador {
    usecase: IUseCase;
    constructor(usecase: IUseCase) {
        console.log("contruiu o controller")
        this.usecase = usecase;
    }

    handler(req: Request, resp: Response) {
        console.log('chegou requisição')
        const retorno = this.usecase.perform();
        resp.json({ message: retorno}).end();
    }
}

export { Contorlador };
