class BancoDeDados {
  constructor() {
    this.administrador = [{id: 1,name: 'Adm01', login: 1234, senha: 4321}]
    this.professores = [{id: 1, name: 'Augusto', password: '1234', telephone: 487657666 }, {id: 2, name: 'Laura', password: '321', telephone: 487651111 }];
    this.alunos = [{id: 2212,name: 'Paulo', idade: 18, email: 'paulo@gmail.com', password: '1111', idSala: 1}, {id: 1211,name: 'Henrique', idade: 16, email: 'henrique@gmail.com', password: '2222', idSala: 2}];
    this.salas = [{id: 1, qtdAlunos: 32}, {id: 2, qtdAlunos: 18}];
    this.materias = [{id: 1, name: 'Matematica'}, {id: 2, name: 'Front End'}];
    this.leciona = [{id: 1, idProfessor: 2, idMateria: 1, idSala: 1}, {id: 2, idProfessor: 1, idMateria: 2, idSala: 2}];
    this.atividades = [{id: 1, idAluno: 2212, idMateria: 2, title: 'ATV 01 avaliativa', description: 'bla bla bla bla', grade: 8.8}];
  }
}
export const db = new BancoDeDados()

