import { Request, Response } from 'express';
import { ICria_NotaFiscal_Usecase } from '../../domain/contratos/icria-notafiscal-usecase';
import { Cria_NotaFiscal_Usecase } from '../../domain/usecases/cria-nota-fiscal-usecase'
import { NotaFiscal } from 'src/domain/entities/notafiscal';
import { IControlador } from '../contratos/icontrolador';


class NotaFiscal_Create_Controlador implements IControlador {
    usecase: ICria_NotaFiscal_Usecase;

    constructor(usecase: ICria_NotaFiscal_Usecase) {
        console.log("contruiu o controller")
        this.usecase = usecase;
    }

    handler(req: Request, resp: Response): void {
        console.log('chegou requisição')
        // if (! req.query.id) {
            // return resp.status(400).json({ message: 'id não informado'}).end();
        // }
        if (! req.params.id) {
            resp.status(400).json({ message: 'id não informado'}).end();
            return;
        }
        const { id } = req.params;

        const DTO_usecase: ICria_NotaFiscal_Usecase.Params = {
            id
        };
        const retorno = this.usecase.perform(DTO_usecase);

        if (retorno instanceof Error) {
            resp.status(400).json({ message: retorno.message }).end();
            return;
        }
        resp.status(200).json({ retorno }).end();
    }
}

export { NotaFiscal_Create_Controlador };
