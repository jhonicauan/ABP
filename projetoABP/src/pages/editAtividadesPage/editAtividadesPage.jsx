import "./editAtividadesPage.css";
import Input from "../../components/input/input";
import Button from "../../components/button/button";
import { adim } from "../../entities/adm";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditAtividadesPage() {
  const { idAtividade } = useParams();
  const [atividade, setAtividade] = useState(
    adim.find("atividades", idAtividade)
  );
  const navigate = useNavigate();

  const handleChange = (e) => {
    const key = e.target.id;
    setAtividade((prev) => ({ ...prev, [key]: e.target.value }));
  };

  const updateEntity = (e) => {
    e.preventDefault();
    adim.update("atividades", idAtividade, atividade);
    navigate("/listatividades");
  };

  const deleteEntity = () => {
    adim.delete("atividades", idAtividade);
    navigate("/listatividades");
  };

  const SaveButtonStyle = {
    width: "10%",
    backgroundColor: "rgb(55, 114, 71)",
    color: "rgb(229, 252, 235)",
  };

  const DeleteButtonStyle = {
    width: "10%",
    backgroundColor: "rgb(122, 29, 29)",
  };

  return (
    <main>
      <div className="tittle">
        <h2>Editar Atividade</h2>
      </div>
      <div className="edit_box">
        <form className="form_box" onSubmit={updateEntity}>
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
              buttonText="Salvar"
              type="submit"
              style={SaveButtonStyle}
              onclick={updateEntity}
            />
            <Button
              buttonText="Deletar"
              style={DeleteButtonStyle}
              onclick={deleteEntity}
            />
          </div>
        </form>
      </div>
    </main>
  );
}
