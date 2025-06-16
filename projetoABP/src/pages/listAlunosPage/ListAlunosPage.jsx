import './ListAlunosPage.css'
import { prof } from '../../entities/professor'
import Lista from '../../components/lista/lista'
import { db } from '../../../db'

export default function ListAlunosPage({ProfessorId = 2}) {
    const listAlunos = db['alunos']
    return (
        <main>
            <div className='tittle'>
                <h2>Lista de Alunos</h2>
            </div>
            <Lista entityList={listAlunos}></Lista>
        </main>
    )
}