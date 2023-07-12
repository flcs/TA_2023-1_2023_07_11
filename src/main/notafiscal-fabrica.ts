import { Contorlador } from "../presentation/controllers/notafiscal-create-controller";
import { NotFiscal_Repositorio } from '../repositories/notafiscal-repositorio'
import { Cria_NotaFiscal_Usecase } from '../domain/usecases/usecase'
import { NotaFiscal } from '../domain/entities/notafiscal'

function Fabrica_De_Controladores() {

    console.log('fabrica')
    const repositorio = new NotFiscal_Repositorio();
    const usecase = new Cria_NotaFiscal_Usecase(repositorio);
    const controlador = new Contorlador(usecase);
    return controlador;
}

export { Fabrica_De_Controladores };