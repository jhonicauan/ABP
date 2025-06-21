
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { db } from '../../../db'
import { adim } from '../../entities/adm'
import { prof } from '../../entities/professor'
import './homePage.css'
import { Link } from 'react-router-dom'
export default function Homepage() {
    const navigate = useNavigate()

    useEffect(() => {
        const id = localStorage.getItem('id')
        const tipo = localStorage.getItem('tipo')

        if (!id || !tipo) {
        navigate('/')
        }
    }, [navigate])
    const user = adim.find(localStorage.getItem('tipo'),localStorage.getItem('id'))
    const Options = {
        alunos: ['atividades', 'materias'],
        professores: ['atividades', 'salas'],
        administrador: ['professores','alunos', 'materias', 'salas','leciona']
    }

    return (
        <>
        <main>
            <Welcomeback name={user.nome}></Welcomeback>
            <div className='interface'>
                <div className='options'>
                {Options[localStorage.getItem('tipo')].map(optionItem => 
                <Boxoptions entity={optionItem}></Boxoptions>
                )}
                </div>
                <Geralinfos entity={localStorage.getItem('tipo')} user={user}></Geralinfos> 
            </div>
        </main>
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
            <ul>
           <Link to={`/add${entity}`}> <li>Adicionar {entity}</li> </Link>
            <Link to={`/list${entity}`}><li>Listar {entity}</li></Link>
            </ul>
        </div>
    )
}

const InfosAdm = () => {
    let TotalStudents = db.alunos.length;
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
                    <h4>Nome: {user.nome}</h4>
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
                    <h4>Nome: {user.nome}</h4>
                </li>
                <li>
                    <h4>Telefone: {user.telefone}</h4>
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
            <div className='geral_title'>
                <h2>Informaçoes</h2>
            </div>
                {entity == 'administrador' && <InfosAdm/>}
                {entity == 'alunos' && <InfosAluno user={user}/>}
                {entity == 'professores' && <InfosProfessor user={user}/>}
        </div>
    )
}

