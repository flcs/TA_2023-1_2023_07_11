
interface IUseCase<Parametros, EntidadeDoDominio> {
    perform(params: Parametros) : EntidadeDoDominio | Error;
}

export { IUseCase };
