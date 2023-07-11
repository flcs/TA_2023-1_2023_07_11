import { IRepositorio } from '../../repositories/contratos/irepositorio';

import { IUseCase } from '../contratos/iusecase';

import { NotaFiscal } from '../entities/nota-fiscal';

// DTO entrada do caso de uso
export namespace Usecase {
    export type Params = {
        id: string;
    }
    export type DTO_saida = NotaFiscal | Error;
}

class UseCase implements IUseCase<Usecase.Params, NotaFiscal> {
    repo: IRepositorio<NotaFiscal>;
    constructor(repo: IRepositorio<NotaFiscal>) {
        this.repo = repo;
    }
    
    perform(params: Usecase.Params ): Usecase.DTO_saida {
        console.log('use case')
        // const { id } = params;
        const id = params.id;
        if (id === '-1') {
            throw new Error('id inválido');
        }
        return this.repo.findById(id);
    }
}

export { UseCase }
