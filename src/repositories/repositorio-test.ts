import { Repositorio } from './repositorio';
import { NotaFiscal } from 'src/domain/entities/nota-fiscal';

describe('Repositorio create', () => {
    it('deve ser capaz de adicionar um novo registro', () => {
        // arrange
        const sut = new Repositorio();
        const nota = new NotaFiscal('1');

        // act
        const result = sut.create(nota);
        
        // assert
        expect(result).toEqual({id: '1'});
    });
});