import './ListAlunosPage.css'
import Lista from '../../components/lista/lista'
import { db } from '../../../db'
import { useEffect, useState } from 'react'

export default function ListAlunosPage() {
  const [listAlunos, setListAlunos] = useState([{nome:''}])

  useEffect(() => {
    console.log(db.alunos)
    const tipo = localStorage.getItem('tipo');
    const id = localStorage.getItem('id');
    let lista = [];
    let alunos = [];
    if(tipo == 'administrador'){
        alunos = db.alunos;
    }else if(tipo == 'professor'){
        const salasProf = db.leciona.filter(leciona => leciona.idProfessor == id).map(leciona => leciona.idSala);
        alunos = db.alunos.filter(aluno => salasProf.includes(aluno.idSala));
    }
    lista = alunos.map(aluno => {
        const salaAluno = db.salas.find(sala => sala.id == aluno.idSala);
        return ({
            id: aluno.id,
            nome: aluno.nome,
            email: aluno.email,
            sala: salaAluno.sala
        });
    });
    setListAlunos(lista);
  },[])
    

  return (
    <main>
      <div className='tittle'>
        <h2>Lista de Alunos</h2>
      </div>
      <Lista entityList={listAlunos}editRoute="/editAlunos"/>
    </main>
  )
}
