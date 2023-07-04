import { IRepositorio } from '../../repositories/contratos/irepositorio';

import { IUseCase } from '../contratos/iusecase';

import { NotaFiscal } from '../entities/nota-fiscal';

export type Usecase_Params = {
    id: string;
}

class UseCase implements IUseCase<Usecase_Params, NotaFiscal> {
    repo: IRepositorio<NotaFiscal>;
    constructor(repo: IRepositorio<NotaFiscal>) {
        this.repo = repo;
    }
    perform(params: Usecase_Params ): NotaFiscal | Error {
        console.log('use case')
        // const { id } = params;
        const id = params.id;
        if (id === '-1') {
            throw new Error('id inválido');
        }
        return this.repo.
        return this.repo.findById(id);
    }
}

export { UseCase }
