import cursoService from "../services/curso.service.js";

async function createCursoController(request,response) {
    const novoCurso = request.body;

    try{
        const novoSalvo = await cursoService.createCursoService(novoCurso);
        response.status(201).send(cursoService.createCursoService(novoCurso));
    }catch (error) {
        response.status(400).send(error.message);
    }
    
}

async function findAllCursosController(request, response) {
    try {
        const cursos = await cursoService.findAllCursosService();
        response.status(200).send(cursos);
    } catch (error) {
        response.status(400).send(error.message);
    }
}

async function findCursoByIdController(request, response) {
    const { id_curso} = request.params;

    try{
        const curso = await cursoService.findCursoByIdService(id_curso);
        response.status(200). send(curso);
    } catch (error) {
        response.status(404). send(error.message);

    }
    
}

async function updateCursoController(request, response) {
    const {id_curso} = request.params;
    const cursoAtualizado = request.body;

    try{
        const cursoEditado = await cursoService.updateCursoService(id_curso, cursoAtualizado);
response.status(200).send(cursoEditado);
    }catch (error) {
        response.status(400). send(error.message);
    }
    
}

async function deleteCursoController(request, response) {
    const {id_curso} = request.params;

    try {
        const resultado = await cursoService.deleteCursoService(id_curso);
        response.status(200).send(resultado);
    } catch (error) {
        response.status(404). send(error.message);
    }
}

export default {
    createCursoController,
    findAllCursosController,
    findCursoByIdController,
    updateCursoController,
    deleteCursoController
};