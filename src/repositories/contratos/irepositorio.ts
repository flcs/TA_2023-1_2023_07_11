interface IRepositorio<EntidadeDoDominio> {
    findById(id: string): EntidadeDoDominio | Error;
    updateById(id: string, data: Partial<EntidadeDoDominio>): EntidadeDoDominio | Error;
    deleteById(id: string): boolean | Error;
    create(data: EntidadeDoDominio): EntidadeDoDominio | Error;
    findAll(): EntidadeDoDominio[];
}

export { IRepositorio };
