import { db } from "../../db";

class atividades {
    constructor(idAtividade,idAluno, idMateria, title, description, grade ){
        this.id = idAtividade;
        this.idAluno = idAluno;
        this.idMateria = idMateria;
        this.title = title;
        this.description = description;
        this.grade = grade;
    }
}

export class professor {
    constructor(name, email, password, telephone){
        this.id = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
        this.name = name;
        this.email = email;
        this.password = password;
        this.telephone = telephone;
    }
    listClasses(idProfessor) {
        return db.leciona
        .filter(lecionaItem => lecionaItem.idProfessor == idProfessor)
        .map(lecionaItem => db.salas.find(salaItem => salaItem.id == lecionaItem.idSala))
    }
    listStudents(idProfessor){
        const classes = this.listClasses(idProfessor);
        const salaIds = classes.map(classesItem => classesItem.id);
        return db.alunos.filter(aluno => salaIds.includes(aluno.idSala));
    }
    addActivities(idAtividade,idSala, idMateria, title, description, grade){
        db.alunos
        .filter(alunoItem => alunoItem.idSala == idSala)
        .forEach(alunoItem => db.atividades.push(new atividades(idAtividade,alunoItem.idAluno,idMateria,title,description,grade)))
    }
    updateGrade(idAtividade,idAluno, NewGrade){
        const atividade = db.atividades
        .filter(atividadeItem => atividadeItem.idAluno == idAluno && atividadeItem.idAtividade == idAtividade)
        atividade.grade = NewGrade
    }
   
}

export const prof = new professor()