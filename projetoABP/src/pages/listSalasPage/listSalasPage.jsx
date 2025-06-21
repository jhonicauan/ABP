import './ListSalasPage.css'
import Lista from '../../components/lista/lista'
import { db } from '../../../db'
import { useEffect, useState } from 'react';

export default function ListSalasPage() {
    const listSalas = db['salas']
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
                <h2>Lista de salas</h2>
            </div>
            <Lista entityList={listSalas} editar={editar} editRoute="/editSalas" />
        </main>
    )
}