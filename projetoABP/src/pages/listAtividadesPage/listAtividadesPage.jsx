import "./listAtividadesPage.css";
import Lista from "../../components/lista/lista";
import { db } from "../../../db";

export default function ListAtividadesPage() {
  const listAtividades = db["atividades"];
  return (
    <main>
      <div className="tittle">
        <h2>Lista de Atividades</h2>
      </div>
      <Lista entityList={listAtividades} editRoute="/editatividades" />
    </main>
  );
}
