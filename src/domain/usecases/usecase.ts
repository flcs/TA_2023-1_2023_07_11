import { IRepositorio_NotaFiscal } from '../../repositories/contratos/irepositorio';

import { ICria_NotaFiscal_Usecase } from '../contratos/iusecase';

import { NotaFiscal } from '../entities/notafiscal';


class Cria_NotaFiscal_Usecase implements ICria_NotaFiscal_Usecase {
    repo: IRepositorio_NotaFiscal;
    constructor(repo: IRepositorio_NotaFiscal) {
        this.repo = repo;
    }
    
    perform(params: ICria_NotaFiscal_Usecase.Params ): ICria_NotaFiscal_Usecase.DTO_saida {
        console.log('use case')
        // const { id } = params;
        const id = params.id;
        if (id === '-1') {
            throw new Error('id inválido');
        }
        return this.repo.findById(id);
    }
}

export { Cria_NotaFiscal_Usecase }
