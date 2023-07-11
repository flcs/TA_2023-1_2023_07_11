import { Request, Response } from 'express';
import { IUseCase } from '../../domain/contratos/iusecase';
import { Usecase } from '../../domain/usecases/usecase'
import { NotaFiscal } from 'src/domain/entities/nota-fiscal';


class Contorlador {
    usecase: IUseCase<Usecase.Params, NotaFiscal>;

    constructor(usecase: IUseCase<Usecase.Params, NotaFiscal>) {
        console.log("contruiu o controller")
        this.usecase = usecase;
    }

    handler(req: Request, resp: Response) {
        console.log('chegou requisição')
        // if (! req.query.id) {
            // return resp.status(400).json({ message: 'id não informado'}).end();
        // }
        if (! req.params.id) {
            return resp.status(400).json({ message: 'id não informado'}).end();
        }
        const { id } = req.params;

        const DTO_usecase: Usecase.Params = {
            id
        };
        const retorno = this.usecase.perform(DTO_usecase);

        if (retorno instanceof Error) {
            return resp.status(400).json({ message: retorno.message }).end();
        }
        resp.status(200).json({ retorno }).end();
    }
}

export { Contorlador };
