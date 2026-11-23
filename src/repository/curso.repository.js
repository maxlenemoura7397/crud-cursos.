import db from "../config/database.js";

db.run(`
    CREATE TABLE IF NOT EXISTS curso (
        id_curso INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        area TEXT  NOT NULL,
        nivel TEXT NOT NULL,
        modalidade TEXT NOT NULL
     
    )
`);

function createCursoRepository(novoCurso) {
    return new Promise((resolve, reject) => {
        const {
            nome,
            area,
            nivel,
            modalidade
        } = novoCurso;

        db.run(
            `INSERT INTO curso (nome, area, nivel,modalidade)
            VALUES (?, ?, ?, ?)`,
            [nome, area, nivel, modalidade],
            function (error) {
                if (error) {
                    reject(error);
                } else {
                    resolve({ id_curso: this.lastID, ...novoCurso});
                }
            }
        )
    })
}
function findAllCursosRepository() {
    return new Promise((resolve, reject) => {
        db.all(
            `SELECT * FROM curso`,
            [],
            (error, rows) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(rows);
                }

            }
        )
    })
}
function findCursoByIdRepository(id_curso) {
    return new Promise((resolve, reject) => {
        db.get(
            `SELECT * FROM curso WHERE id_curso = ?`,
            [id_curso],
            (error, row) => {
                if (error) {
                    reject(error);

                } else {
                    resolve(row);
                }
            }

        )
    });
}
function updateCursoRepository(id_curso, cursoAtualizado) {
    return new Promise((resolve, reject) => {
        const {
            nome,
            area, 
            nivel,
            modalidade
        } = cursoAtualizado;

        db.run(
            `UPDATE curso
            SET nome = ?, area = ?, nivel = ?, modalidade = ?
            WHERE id_curso = ?`,
            [nome, area, nivel, modalidade, id_curso],
            function (error) {
                if (error) {
                    reject(error);

                } else if (this.changes === 0) {
                    resolve(null);
                }else {
                    resolve({ id_curso: Number(id_curso), ... cursoAtualizado});

                }
            }
        );
    });
}

function deleteCursoRepository(id_curso) {
    return new Promise((resolve, reject) => {
        db.run(
            `DELETE FROM curso WHERE id_curso = ?`,
            [id_curso],
            function (error) {
                if (error){
                    reject(error);
                } else if (this.changes === 0) {
                    resolve(false);
                } else {
                    resolve(true);
                }
                
            }
        )
    })
}

export default {
    createCursoRepository,
    findAllCursosRepository,
    findCursoByIdRepository,
    updateCursoRepository,
    deleteCursoRepository,
};

