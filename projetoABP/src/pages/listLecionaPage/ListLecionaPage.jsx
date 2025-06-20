import './ListLecionaPage.css'
import Lista from '../../components/lista/lista'
import { db } from '../../../db'

export default function ListLecionaPage() {
    const listLeciona = db['leciona']
    return (
        <main>
            <div className='tittle'>
                <h2>Lista de Leciona</h2>
            </div>
            <Lista entityList={listLeciona} editRoute="/editleciona" />
        </main>
    )
}