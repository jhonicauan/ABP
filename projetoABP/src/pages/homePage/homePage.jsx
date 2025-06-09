import { useState } from 'react'
import { db } from '../../../db'
import { adim } from '../../entities/adm'
import { prof } from '../../entities/professor'
import './homePage.css'

export default function Homepage({entity = 'professores', id = 2}) {
    const user = adim.find(entity,id)
    const Options = {
        alunos: ['atividades', 'materias'],
        professores: ['atividades', 'salas', 'alunos'],
        administrador: ['professores', 'materias', 'salas', 'materias']
    }
    return (
        <>
        <main>
            <Welcomeback name={user.name}></Welcomeback>
            <div className='options'>
               {Options[entity].map(optionItem => 
               <Boxoptions entity={optionItem}></Boxoptions>
               )}
            </div>
        </main>
         <Geralinfos entity={entity} user={user}></Geralinfos> 
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
    const [clicked, setClicked] = useState(false)
    function handleclick(e) {
        e.target.classList.toggle("active")
        setClicked(prev => prev = !prev)
    }
    return(
        <div className='box_options' onClick={handleclick}>
            <h3>{entity}</h3>
            {clicked && 
            <ul>
            <li>Adicionar {entity}</li> 
            <li>Listar {entity}</li>
            </ul>
            }
        </div>
    )
}

const InfosAdm = () => {
    let TotalStudents = db.salas.reduce((acc, salaItem) => acc.qtdAlunos + salaItem.qtdAlunos)
    let TotalTeachers = db.professores.length;
    let TotalClassrooms = db.salas.length;
       return ( 
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
    )
}

const InfosAluno = ({user}) => {
    return (
         <ul>
                <li>
                    <h4>Nome: {user.name}</h4>
                </li>
                <li>
                    <h4>Telefone: {user.email}</h4>
                </li>
                <li>
                    <h4>Sala: {user.idSala}</h4>
                </li>
        </ul>
    )
}

const InfosProfessor = ({user}) => {
    const countClasses = prof.listClasses(user.id).length
    return (
         <ul>
                <li>
                    <h4>Nome: {user.name}</h4>
                </li>
                <li>
                    <h4>Telefone: {user.telephone}</h4>
                </li>
                <li>
                    <h4>Numero de salas: {countClasses}</h4>
                </li>
        </ul>
    )
}

function Geralinfos({entity, user}){

    return(
        <div className='geral_box'>
            <h2>Informaçoes</h2>
                {entity == 'administrador' && <InfosAdm/>}
                {entity == 'alunos' && <InfosAluno user={user}/>}
                {entity == 'professores' && <InfosProfessor user={user}/>}
        </div>
    )
}