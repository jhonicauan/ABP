import { db } from "../../db";

export class Sala {
  constructor(idSala, qtdAlunos) {
    this.idSala = idSala;
    this.qtdAlunos = qtdAlunos;
  }
}

export class Materia {
  constructor(idMateria, nome) {
    this.idMateria = idMateria;
    this.nome = nome;
  }
}

export class Leciona {
  constructor(idProfessor, idMateria, idSala) {
    this.idLeciona = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
    this.idProfessor = idProfessor;
    this.idMateria = idMateria;
    this.idSala = idSala;
  }
}


export class adm {
    add(entity, instance){
       db[entity].push(instance)
    }
    list(entity){
        return db[entity]
    }
    find(entity, id){
        return db[entity].find(item => item.id == id)
    }
    update(entity,id,newdata){
        const item = this.find(entity,id)
        db[entity].assign(item, newdata)
    }
    delete(entity, id){
        const list = db[entity]
        const index = list.findIndex(item => item.id == id)
        list.slice(index)
    }
}


