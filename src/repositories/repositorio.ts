import { IRepositorio } from './contratos/irepositorio';
import { NotaFiscal } from '../domain/entities/nota-fiscal';

class Repositorio implements IRepositorio<NotaFiscal> {
    lista: NotaFiscal[];
    
    constructor() {
        this.lista = [];
    }

    create(data: NotaFiscal): NotaFiscal | Error {
        const index = this.lista.findIndex(item => item.id === data.id);
        if (index !== -1) {
            return new Error('Nota fiscal já existe.');
        }
        this.lista.push(data);
        return data;
    }

    updateById(id: string, data: Partial<NotaFiscal>): NotaFiscal | Error {
        const index = this.lista.findIndex(item => item.id === id);
        if (index === -1) {
            return new Error('Nota fiscal não encontrada.');
        }
        const obj = this.lista[index];
        this.lista[index] = { ...obj, ...data };
        return this.lista[index];
    }

    deleteById(id: string): boolean | Error {
        const index = this.lista.findIndex(item => item.id === id);
        if (index === -1) {
            return new Error('Nota fiscal não encontrada.');
        }
        this.lista.splice(index, 1);
        return true;
    }
    
    findAll(): NotaFiscal[] {
        return this.lista;
    }

    findById(id: string): NotaFiscal | Error {
        const item = this.lista.find(item => item.id === id);
        if (!item) {
            return new Error('item não encontrado');
        }
        console.log('repositorio')
        return item;

    }

    
}

export { Repositorio }
