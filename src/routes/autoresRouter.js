import express from "express";

import autorController from "../controllers/autorController.js";

const routes = express.Router();

routes.get("/autor", autorController.listarAutor);
routes.get("/autor/:id", autorController.listarAutorPorId);
routes.post("/autor", autorController.cadastraAutor);
routes.put("/autor/:id", autorController.atualizarAutor);
routes.delete("/autor/:id", autorController.deletarAutor);
export default routes;