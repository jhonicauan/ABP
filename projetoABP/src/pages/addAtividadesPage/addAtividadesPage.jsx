import "./addAtividadesPage.css";
import Input from "../../components/input/input";
import Button from "../../components/button/button";
import { adim } from "../../entities/adm";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../../db";
import Combobox from "react-widgets/Combobox";

export default function AddAtividadesPage() {
  const ids = db.atividades.map(atividade => atividade.id);
   const novoId = ids.length + 1;
  const idProf = localStorage.getItem('id');
  const [atividade, setAtividade] = useState({
    id:novoId,
    idAluno: "",
    idMateria: "",
    idProfessor:idProf,
    titulo: "",
    descricao: "",
    nota: "",
  });
  const [disable,setDisable] = useState(true);
  const [listMaterias,setListMaterias] = useState([{nome:''}])
  const salasProf = db.leciona.filter(leciona => leciona.idProfessor == idProf).map(leciona => leciona.idSala);
  const ListAlunos = db.alunos.filter(aluno => salasProf.includes(aluno.idSala));
  const navigate = useNavigate();

  useEffect(()=>{
    if(atividade.idAluno > 0){
      setDisable(false);
      const aluno = db.alunos.find(aluno => aluno.id == atividade.idAluno);
      const materiasProf = db.leciona.filter(leciona => leciona.idSala == aluno.idSala && leciona.idProfessor == idProf).map(leciona => leciona.idMateria);
      const materias = db.materias.filter(materia => materiasProf.includes(materia.id));
      setListMaterias(materias);
    }
  },[atividade])
  const handleChange = (e) => {
    const key = e.target.id;
    setAtividade((prev) => ({ ...prev, [key]: e.target.value }));
  };

  const addEntity = (e) => {
    e.preventDefault();

    if (
      !atividade.id ||
      !atividade.idAluno ||
      !atividade.idMateria ||
      !atividade.titulo.trim() ||
      !atividade.descricao.trim() ||
      atividade.nota === ""
    ) {
      alert("Preencha todos os campos antes de adicionar a atividade.");
      return;
    }

    adim.add("atividades", atividade);
    navigate("/listatividades");
  };

  const AddButtonStyle = {
    width: "10%",
    backgroundColor: "rgb(55, 114, 71)",
    color: "rgb(229, 252, 235)",
  };

  return (
    <main>
      <div className="tittle">
        <h2>Adicionar Atividade</h2>
      </div>
      <div className="edit_box">
        <form className="form_box" onSubmit={addEntity}>
           <Combobox data={ListAlunos} placeholder='selecione o aluno' textField='nome' dataKey='id' onChange={(value) => setAtividade(prev => ({ ...prev, idAluno: value.id }))} value={atividade.idAluno} id={'idAluno'}/>
           <Combobox data={listMaterias} placeholder='selecione a materia' textField='nome' dataKey='id' onChange={(value) => setAtividade(prev => ({ ...prev, idMateria: value.id }))} value={atividade.idMateria} id={'idMateria'} disabled={disable}/>
          <Input
            input_label="Título"
            value={atividade.titulo}
            width={40}
            onChange={handleChange}
            id="titulo"
          />
          <Input
            input_label="Descrição"
            value={atividade.descricao}
            width={40}
            onChange={handleChange}
            id="descricao"
          />
          <Input
            input_label="Nota"
            value={atividade.nota}
            width={10}
            onChange={handleChange}
            id="nota"
          />
          <div className="buttons_line">
            <Button
              buttonText="Adicionar"
              type="submit"
              style={AddButtonStyle}
              onclick={addEntity}
            />
          </div>
        </form>
      </div>
    </main>
  );
}
