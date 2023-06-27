import express, { Request, Response } from "express";
import { cria_rota } from "./rotas/rota";

const app = express();

const router = cria_rota();

app.use(express.json());
app.use(router);


app.listen(3000, () => {
    console.log("Listening on port 3000");
});
