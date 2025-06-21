import "./addAtividadesPage.css";
import Input from "../../components/input/input";
import Button from "../../components/button/button";
import { adim } from "../../entities/adm";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddAtividadesPage() {
  const [atividade, setAtividade] = useState({
    id: "",
    idAluno: "",
    idMateria: "",
    titulo: "",
    descricao: "",
    nota: "",
  });

  const navigate = useNavigate();

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
          <Input
            input_label="ID"
            value={atividade.id}
            width={10}
            onChange={handleChange}
            id="id"
          />
          <Input
            input_label="ID do Aluno"
            value={atividade.idAluno}
            width={20}
            onChange={handleChange}
            id="idAluno"
          />
          <Input
            input_label="ID da Matéria"
            value={atividade.idMateria}
            width={20}
            onChange={handleChange}
            id="idMateria"
          />
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
