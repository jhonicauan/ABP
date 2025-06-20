import "./listProfessoresPage.css";
import Lista from '../../components/lista/lista'
import { db } from '../../../db'

export default function listProfessoresPage() {
    const listProfessores = db['professores']
    return (
        <main>
            <div className='tittle'>
                <h2>Lista de Professores</h2>
            </div>
            <Lista entityList={listProfessores} editRoute="/editProfessores" />
        </main>
    )
}