import { Request, Response } from "express";
import { IControlador } from "../contratos/icontrolador";
import { IGetAll_NotaFiscal_Usecase } from "src/domain/contratos/igetall-notafiscal-usecase";

export class NotaFiscal_GetAll_Controlador implements IControlador {
    usecase: IGetAll_NotaFiscal_Usecase;
    constructor(usecase: IGetAll_NotaFiscal_Usecase) {
        this.usecase = usecase;
    }

    handler(req: Request, resp: Response) {
        const colecao = this.usecase.perform();
        if (colecao instanceof Error) {
            resp.status(500).json({ message: colecao.message }).end();
            return;
        }
        resp.status(200).json(colecao);
    }
}