import { NotaFiscal } from "../entities/notafiscal";

interface IGetAll_NotaFiscal_Usecase {
    perform() : IGetAll_NotaFiscal_Usecase.DTO_saida;
}

// DTO entrada do caso de uso
namespace IGetAll_NotaFiscal_Usecase {
    export type DTO_saida = NotaFiscal[] | Error;
}


export { IGetAll_NotaFiscal_Usecase };
