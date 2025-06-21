import './ListSalasPage.css'
import Lista from '../../components/lista/lista'
import { db } from '../../../db'

export default function ListSalasPage() {
    const listSalas = db['salas']
    return (
        <main>
            <div className='tittle'>
                <h2>Lista de salas</h2>
            </div>
            <Lista entityList={listSalas} editRoute="/editSalas" />
        </main>
    )
}