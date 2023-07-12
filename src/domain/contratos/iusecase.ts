import { NotaFiscal } from "../entities/notafiscal";

interface ICria_NotaFiscal_Usecase {
    perform(params: ICria_NotaFiscal_Usecase.Params) : ICria_NotaFiscal_Usecase.DTO_saida;
}

// DTO entrada do caso de uso
namespace ICria_NotaFiscal_Usecase {
    export type Params = {
        id: string;
    }
    export type DTO_saida = NotaFiscal | Error;
}


export { ICria_NotaFiscal_Usecase };
