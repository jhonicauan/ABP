import { db } from "../../db";

export class aluno {
    constructor(name, idade, email, password, idSala){
        this.idAluno = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
        this.name = name;
        this.idade = idade;
        this.email = email;
        this.password = password;
        this.idSala = idSala;
    }

    listGrades(idAluno){
        return db.atividades
        .filter(atividadeItem => atividadeItem.idAluno == idAluno)
        .map(atividadeItem => {
            materia: db.materias.find(materiaItem => materiaItem.idMateria == atividadeItem.idMateria)?.nome;
            nota: atividadeItem.grade;
        })
    }
}