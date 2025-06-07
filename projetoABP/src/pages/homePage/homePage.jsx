import { db } from '../../../db'
import { adim } from '../../entities/adm'
import './homePage.css'

export default function Homepage({entity = 'alunos', id = 2212}) {
    const listEntitys = Object.keys(db).splice(1, 6) 
    const user = adim.find(entity,id)
    return (
        <>
        <main>
            <Welcomeback name={user.name}></Welcomeback>
            <div className='options'>
                {listEntitys.map(Entityitem => <Boxoptions entity={Entityitem}></Boxoptions>)}
            </div>
        </main>
         <Geralinfos></Geralinfos> 
        </>   
         )
}

function Welcomeback({name}){
    return(
        <div className="message_box">
            <h2>Bem vindo, {name}</h2>
        </div>
    )
}

function Boxoptions({entity}){
    return(
        <div className='box_options'>
            <h3>{entity}</h3>
        </div>
    )
}

function Geralinfos({entity}){
    let TotalStudents = db.salas.reduce((acc, salaItem) => acc.qtdAlunos + salaItem.qtdAlunos)
    let TotalTeachers = db.professores.length;
    let TotalClassrooms = db.salas.length;
    return(
        <div className='geral_box'>
            <h2>Informaçoes</h2>
            <ul>
                <li>
                    <h4>Alunos Totais: {TotalStudents}</h4>
                </li>
                <li>
                    <h4>Professores Totais: {TotalTeachers}</h4>
                </li>
                <li>
                    <h4>Salas Totais: {TotalClassrooms}</h4>
                </li>
            </ul>
        </div>
    )
}