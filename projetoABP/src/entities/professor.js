import { db } from "../../db";

class atividades {
    constructor(idAtividade,idAluno, idMateria, title, description, grade ){
        this.idAtividade = idAtividade;
        this.idAluno = idAluno;
        this.idMateria = idMateria;
        this.title = title;
        this.description = description;
        this.grade = grade;
    }
}

export class professor {
    constructor(name, email, password, telephone){
        this.idProfessor = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
        this.name = name;
        this.email = email;
        this.password = password;
        this.telephone = telephone;
    }
    listClasses(idProfessor) {
        return db.leciona
        .filter(lecionaItem => lecionaItem.idProfessor == idProfessor)
        .map(lecionaItem => db.salas.find(salaItem => salaItem.idSala == lecionaItem.idSala))
    }
    listStudents(idProfessor){
        const classes = this.listClasses(idProfessor);
        return db.alunos.filter(alunoItem => {
            classes.some(classItem => classItem.idSala == alunoItem.idSala)
        })
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