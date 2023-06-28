import { IRepositorio } from "src/repositories/contratos/irepositorio";
import { Repositorio } from "src/repositories/repositorio";
import { UseCase } from "./usecase";


class RepoStub implements IRepositorio {
    get() {
        return 'repo fake';
    }
}

describe('UseCase exemplo', () => {

    it('should create a usecase', () => {
        // arragen
        const repo_fake = new RepoStub();
        const usecase = new UseCase(repo_fake);
        // act
        const result = usecase.perform({id : '10000'});

        // assert
        expect(result).toBe('repo fake');
    });

    it('deve levantar uma excessão quando o id for -1', () => {
        // arragen
        const repo_fake = new RepoStub();
        const usecase = new UseCase(repo_fake);
        // act
        // const result = usecase.perform({id : '-1'});

        // assert
        // expect(result).toEqual(new Error('id inválido'));
        expect( () => 
            usecase.perform({id : '-1'})
        )
        .toThrow(Error('id inválido'));
    });

});