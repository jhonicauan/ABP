import './ListAlunosPage.css'
import Lista from '../../components/lista/lista'
import { db } from '../../../db'

export default function ListAlunosPage() {
    const listAlunos = db['alunos']
    return (
        <main>
            <div className='tittle'>
                <h2>Lista de Alunos</h2>
            </div>
            <Lista entityList={listAlunos} editRoute="/editAlunos" />
        </main>
    )
}