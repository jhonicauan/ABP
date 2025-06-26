import './ListMateriasPage.css'
import Lista from '../../components/lista/lista'
import { db } from '../../../db'
import { useEffect, useState } from 'react'

export default function ListMateriasPage() {
    const listMaterias = db['materias']
    const tipo = localStorage.getItem('tipo');
    const [editar,setEditar] = useState(true);

    useEffect(()=>{
        if(tipo != 'administrador'){
            setEditar(false);
        }
    },[])
    return (
        <main>
            <div className='tittle'>
                <h2>Lista de Materias</h2>
            </div>
            <Lista entityList={listMaterias} editar={editar} editRoute="/editmaterias" /> 
        </main>
    )
}