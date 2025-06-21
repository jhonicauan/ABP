import "./listProfessoresPage.css";
import Lista from '../../components/lista/lista'
import { db } from '../../../db'
import { useState } from "react";

export default function listProfessoresPage() {
    const listProfessores = db['professores']
    const [editar,setEditar] = useState(true);
    const lista = listProfessores.map(professor => ({id:professor.id,nome:professor.nome,email:professor.email,telefone:professor.telefone}))
    return (
        <main>
            <div className='tittle'>
                <h2>Lista de Professores</h2>
            </div>
            <Lista entityList={lista} editar={editar} editRoute="/editProfessores" />
        </main>
    )
}