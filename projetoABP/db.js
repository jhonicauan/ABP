class BancoDeDados {
  constructor() {
    this.administrador = [{id: 1, login: 1234, senha: 4321}]
    this.professores = [];
    this.alunos = [];
    this.salas = [];
    this.materias = [];
    this.leciona = [];
    this.atividades = [];
  }
}

export const db = new BancoDeDados()

