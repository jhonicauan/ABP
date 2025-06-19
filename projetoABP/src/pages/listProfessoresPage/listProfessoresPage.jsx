import "./ListProfessoresPage.css";
import { prof } from '../../entities/professor'
import Lista from '../../components/lista/lista'
import { db } from '../../../db'

export default function ListProfessoresPage() {
    const listProfessores = db['professores']
    return (
        <main>
            <div className='tittle'>
                <h2>Lista de Professores</h2>
            </div>
            <Lista entityList={listProfessores}></Lista>
        </main>
    )
}