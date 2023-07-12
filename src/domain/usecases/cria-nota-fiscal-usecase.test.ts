import { IRepositorio_NotaFiscal } from "src/repositories/contratos/irepositorio";
import { NotFiscal_Repositorio } from "src/repositories/notafiscal-repositorio";
import { Cria_NotaFiscal_Usecase } from "./cria-nota-fiscal-usecase";
import { NotaFiscal } from "../entities/notafiscal";



class RepoStub implements IRepositorio_NotaFiscal {
    updateById(id: string, data: Partial<NotaFiscal>): NotaFiscal | Error {
        throw new Error("Method not implemented.");
    }
    deleteById(id: string): boolean | Error {
        throw new Error("Method not implemented.");
    }
    create(data: NotaFiscal): NotaFiscal | Error {
        throw new Error("Method not implemented.");
    }
    findAll(): NotaFiscal[] {
        throw new Error("Method not implemented.");
    }
    findById(): NotaFiscal | Error {
        return {id: '0001'} as NotaFiscal;
    }
}

function cria_sut() {
    const repo_fake = new RepoStub();
    const sut = new Cria_NotaFiscal_Usecase(repo_fake);
    return { repo_fake, sut };
}

describe('UseCase exemplo', () => {

    it('should create a usecase', () => {
        // arragen
        // const repo_fake = new RepoStub();
        // const sut = new UseCase(repo_fake);
        const { sut, repo_fake } = cria_sut();
        // act
        const result = sut.perform({id : '10000'});

        // assert
        expect(result).toEqual({ id: '0001'});
    });

    it('deve levantar uma excessão quando o id for -1', () => {
        // arragen
        const repo_fake = new RepoStub();
        const sut = new Cria_NotaFiscal_Usecase(repo_fake);
        // act
        // const result = usecase.perform({id : '-1'});

        // assert
        // expect(result).toEqual(new Error('id inválido'));
        expect( () => 
            sut.perform({id : '-1'})
        )
        .toThrow(Error('id inválido'));
    });

});