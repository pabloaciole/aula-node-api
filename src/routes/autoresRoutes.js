import express from "express";
import AutorController from "../controllers/autoresController.js";
import LivroController from "../controllers/livrosController.js";

const router = express.Router();

router
  .get("/autores", AutorController.listArautores)
  .get("/autores/:id", AutorController.listarAutorPorId)
  .post("/autores", AutorController.cadastrarAutor)
  .put("/autores/:id", AutorController.atualizarAutor)
  .delete("/autores/:id", AutorController.excluirAutor)

export default router;