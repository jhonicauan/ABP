import './ListMateriasPage.css'
import Lista from '../../components/lista/lista'
import { db } from '../../../db'

export default function ListMateriasPage() {
    const listMaterias = db['materias']
    return (
        <main>
            <div className='tittle'>
                <h2>Lista de Materias</h2>
            </div>
            <Lista entityList={listMaterias} editRoute="/editmaterias" />
        </main>
    )
}