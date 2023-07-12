import { NotaFiscal } from "../../domain/entities/notafiscal";

interface IRepositorio_NotaFiscal {
    findById(id: string): NotaFiscal | Error;
    updateById(id: string, data: Partial<NotaFiscal>): NotaFiscal | Error;
    deleteById(id: string): boolean | Error;
    create(data: NotaFiscal): NotaFiscal | Error;
    findAll(): NotaFiscal[];
}

export { IRepositorio_NotaFiscal };
