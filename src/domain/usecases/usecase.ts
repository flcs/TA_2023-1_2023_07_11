import { IRepositorio } from '../../repositories/contratos/irepositorio';

import { IUseCase } from '../contratos/iusecase';


class UseCase implements IUseCase {
    repo: IRepositorio;
    constructor(repo: IRepositorio) {
        this.repo = repo;
    }
    perform() {
        console.log('use case')
        return this.repo.get();
    }
}

export { UseCase }
