import cursoController from "../controller/curso.controller.js";
import {Router} from "express";


const cursoRouter = Router();

cursoRouter.post("/cursos", cursoController.createCursoController);
cursoRouter.get("/cursos", cursoController.findAllCursosController);
cursoRouter.get("/cursos/:id_curso", cursoController.findCursoByIdController);
cursoRouter.put("/cursos/:id_curso", cursoController.updateCursoController);
cursoRouter.delete("/cursos/:id_curso", cursoController.deleteCursoController);

export default cursoRouter;