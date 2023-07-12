import { Response } from "express";
import { ICria_NotaFiscal_Usecase } from "../../domain/contratos/icria-notafiscal-usecase";
import { NotaFiscal_Create_Controlador } from "../controllers/notafiscal-create-controller";
import { NotaFiscal_GetAll_Controlador } from "./notafiscal-getall-controller";

class UseCaseFake {
    perform (params: ICria_NotaFiscal_Usecase.Params): ICria_NotaFiscal_Usecase.DTO_saida {
        return {
            id: '1'
        } as ICria_NotaFiscal_Usecase.DTO_saida;
    }
}

class Response_Fake {
    parametro_status: number;
    
    status(param: number): Response_Fake {
        this.parametro_status = param;
        return this;
    }

    json(params: any): Response_Fake {
        return this;
    }

    end(): void {
    }

}

describe('NotaFiscal Controller', () => {
    test('deveria validar que o controller usando spy não recebeu o parâmetro id', () => {
        const usecase_dummy = new UseCaseFake();
        const sut = new NotaFiscal_Create_Controlador(usecase_dummy);

        const req = {
            params: {} // faltando o id (de propósito)
        }

        const resp_spy = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn().mockReturnThis(),
            end: jest.fn()
        }

        sut.handler(req as any, resp_spy as any);

        expect(resp_spy.status).toHaveBeenCalledWith(400);
    })

    test('deveria validar que o controller usando fake não recebeu o parâmetro id', () => {
        const usecase_dummy = new UseCaseFake();
        const sut = new NotaFiscal_Create_Controlador(usecase_dummy);

        const req = {
            params: {} // faltando o id (de propósito)
        }

        const resp_fake = new Response_Fake();

        sut.handler(req as any, resp_fake as any);

        expect(resp_fake.parametro_status).toBe(400);
    })

    test('deveria retornar 200 com uma coleção de dados no getAll do controller', () => {
        // arrange
        const colecao_resposta = [
            {
                id: '1'
            },
            {
                id: '2'
            }
        ]
        const notafical_getall_usecase_fake = {
            perform: jest.fn().mockReturnValue( colecao_resposta )
        }
        const sut = new NotaFiscal_GetAll_Controlador(notafical_getall_usecase_fake);
        
        let resp_spy = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn().mockReturnThis(),
            end: jest.fn()
        };

        // act
        const resposta = sut.handler({} as any, resp_spy as any);
        
        // assert
        expect(resp_spy.json).toHaveBeenCalledWith( colecao_resposta );

    })

})