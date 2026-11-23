import cursoRepository from "../repository/curso.repository.js";

async function createCursoService(novoCurso) {
    const cursoSalvo = await cursoRepository.createCursoRepository(novoCurso);

    if (!cursoSalvo){
        throw new Error("Erro ao criar novo curso!");
    }

    return cursoSalvo;
}

async function findAllCursosService() {
    const cursos = await cursoRepository.findAllCursosRepository();
    return cursos;
}

async function findCursoByIdService(id_curso) {
    const curso = await cursoRepository.findCursoByIdRepository(id_curso);

    if (!curso) {
        throw new Error("Curso não encontrado!");
    }

    return curso;
    
}

async function updateCursoService(id_curso, cursoAtualizado) {
    const cursoExistente = await cursoRepository.findCursoByIdRepository(id_curso);
 
    if (!cursoExistente) {
        throw new Error("Curso não encontrado!");

    }

    const cursoEditado = await cursoRepository.updateCursoRepository(id_curso, cursoAtualizado);

    if (cursoEditado) {
        throw new Error("Erro ao atualizar curso!");
    }

    return cursoEditado;
}

async function deleteCursoService(id_curso) {
    const cursoExistente = await cursoRepository.findCursoByIdRepository(id_curso);

    if (!cursoexistente) {
        throw new Error("Curso não encontrado!");

    }

    const deletado = await cursoRepository.deleteCursoRepository(id_curso);

    if (!deletado) {
        throw new Error("Erro ao deletar curso!");
    }

    return { message: "curso deletado com sucesso! "};
    
}

export default {
createCursoService,
findAllCursosService,
findCursoByIdService,
updateCursoService,
deleteCursoService

};