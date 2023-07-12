import { Request, Response } from "express";

interface IControlador {
    handler(req: Request, resp: Response): void
}

export { IControlador };