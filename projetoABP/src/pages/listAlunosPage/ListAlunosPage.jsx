import './ListAlunosPage.css'
import { prof } from '../../entities/professor'
import Lista from '../../components/lista/lista'

export default function ListAlunosPage({ProfessorId = 2}) {
    const listAlunos = prof.listStudents(ProfessorId)
    return (
        <main>
            <div className='tittle'>
                <h2>Lista de Alunos</h2>
            </div>
            <Lista entityList={listAlunos}></Lista>
        </main>
    )
}