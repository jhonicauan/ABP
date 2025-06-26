import "./listAtividadesPage.css";
import Lista from "../../components/lista/lista";
import { db } from "../../../db";
import { useEffect, useState } from "react";

export default function ListAtividadesPage() {
  const [listAtividades,setListAtividades] = useState(db.atividades);

  const [editar,setEditar] = useState(true);
  const id = localStorage.getItem('id');
  const tipo = localStorage.getItem('tipo');
  useEffect(()=>{
    if(tipo != 'professores'){
      setEditar(false);
    }

    if(tipo == 'professores'){
      const atividadesProf = db.atividades.filter(atividade => atividade.idProfessor == id);
      const listaAtividade = atividadesProf.map(atividade =>{
        const professor = db.professores.find(professor => professor.id == atividade.idProfessor);
        const materia = db.materias.find(materia => materia.id == atividade.idMateria);
        const aluno = db.alunos.find(aluno => aluno.id == atividade.idAluno);
        const idToShow = atividadesProf.map(atvItem => atvItem.id)
        return({
          id:atividade.id,
          aluno:aluno.nome,
          materia:materia.nome,
          professor:professor.nome,
          titulo:atividade.titulo,
          descricao:atividade.descricao,
          nota:atividade.nota
        });
      });

      setListAtividades(listaAtividade);
    }else{
      const atividadeAluno = db.atividades.filter(atividade => atividade.idAluno == id);
      const listaAtividade = atividadeAluno.map(atividade =>{
        const professor = db.professores.find(professor => professor.id == atividade.idProfessor);
        const materia = db.materias.find(materia => materia.id == atividade.idMateria);
        const aluno = db.alunos.find(aluno => aluno.id == atividade.idAluno);

        console.log(aluno)

        return({
          id:atividade.id,
          aluno:aluno.nome,
          materia:materia.nome,
          professor:professor.nome,
          titulo:atividade.titulo,
          descricao:atividade.descricao,
          nota:atividade.nota
        });
      })
      setListAtividades(listaAtividade);
    }
  },[])
  return (
    <main>
      <div className="tittle">
        <h2>Lista de Atividades</h2>
      </div>
      <Lista entityList={listAtividades} editar={editar} editRoute="/editatividades" /> 
    </main>
  );
}
