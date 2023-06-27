import { Contorlador } from "../presentation/controllers/controller";

import { Repositorio } from '../repositories/repositorio'

import { UseCase } from '../domain/usecases/usecase'

function Fabrica_De_Controladores() {

    console.log('fabrica')
    const repositorio = new Repositorio();
    const usecase = new UseCase(repositorio);
    const controlador = new Contorlador(usecase);
    return controlador;
}

export { Fabrica_De_Controladores };