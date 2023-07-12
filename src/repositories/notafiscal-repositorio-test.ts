import { NotFiscal_Repositorio } from './notafiscal-repositorio';
import { NotaFiscal } from '../domain/entities/notafiscal';

describe('Repositorio create', () => {
    it('deve ser capaz de adicionar um novo registro', () => {
        // arrange
        const sut = new NotFiscal_Repositorio();
        const nota = new NotaFiscal('1');

        // act
        const result = sut.create(nota);
        
        // assert
        expect(result).toEqual({id: '1'});
    });
});