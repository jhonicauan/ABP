import './ListLecionaPage.css'
import Lista from '../../components/lista/lista'
import { db } from '../../../db'
import { useEffect, useState } from 'react'

export default function ListLecionaPage() {
    const Leciona = db['leciona']
    const [listLeciona,setListLeciona] = useState(Leciona);
    const [editar,setEditar] = useState(true);
    useEffect(()=>{
        const lista = Leciona.map(leciona =>{
            const professor = db.professores.find(professor => professor.id == leciona.idProfessor);
            const sala = db.salas.find(sala => sala.id == leciona.idSala);
            const materia = db.materias.find(materia => materia.id == leciona.idMateria);
            return({
                id:leciona.id,
                professor: professor.nome,
                sala: sala.sala,
                materia: materia.nome
            });
        });
        setListLeciona(lista)
    },[])
    return (
        <main>
            <div className='tittle'>
                <h2>Lista de Leciona</h2>
            </div>
            <Lista entityList={listLeciona} editar={editar} editRoute="/editleciona" /> 
        </main>
    )
}