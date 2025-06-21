class BancoDeDados {
  constructor() {
    this.administrador = [{id: 1,nome: 'Adm01', email: 'adm@gmail.com', senha: '4321'}]
    this.professores = [{id: 1, nome: 'Augusto', senha: '1234',email: 'augusto@gmail.com', telefone: 487657666 }, {id: 2, nome: 'Laura',email: 'laura@gmail.com', senha: '321', telefone: 487651111 }];
    this.alunos = [{id: 2212,nome: 'Paulo', idade: 18, email: 'paulo@gmail.com', senha: '1111', idSala: 1}, {id: 1211,nome: 'Henrique', idade: 16, email: 'henrique@gmail.com', senha: '2222', idSala: 2}];
    this.salas = [{id: 1, sala:'1-52'}, {id: 2, sala:'1-42'}];
    this.materias = [{id: 1, nome: 'Matematica'}, {id: 2, nome: 'Front End'}, {id: 3, nome: 'Português'}, {id: 4, nome: 'Inglês'}, {id: 5, nome: 'Física'}, {id: 6, nome: 'História'}];
    this.leciona = [{id: 1, idProfessor: 2, idMateria: 1, idSala: 1}, {id: 2, idProfessor: 1, idMateria: 2, idSala: 2}];
    this.atividades = [{id: 1, idAluno: 2212, idMateria: 2, titulo: 'ATV 01 avaliativa', descricao: 'bla bla bla bla', nota: 8.8}];
  }
}
export const db = new BancoDeDados()

