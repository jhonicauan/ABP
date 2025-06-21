import './editAlunosPage.css'
import Input from '../../components/input/input'
import Button from '../../components/button/button'
import Combobox from "react-widgets/Combobox";
import { adim } from '../../entities/adm'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { db } from '../../../db'
export default function EditAlunosPage() {
    const {idAluno} = useParams()
    const [aluno, setAluno] = useState(adim.find('alunos', idAluno))
    const ListSala = db.salas.map(salas => ({id:salas.id, sala:salas.sala}))
    const navigate = useNavigate();
    const deleteEntity = () => {
        adim.delete('alunos', idAluno)
        navigate('/listalunos')
    }
    const updateEntity = (e) => {
        e.preventDefault()
        adim.update('alunos', idAluno, aluno)
        navigate('/listalunos')
    }
    const handleChange = (e) => {
        const key = e.target.id
        setAluno(prevAluno => ({...prevAluno, [key]: e.target.value}))
    }   
    const DeleteButtonStyle = {
        width: '10%',
        backgroundColor: 'rgb(122, 29, 29)'
    }
    const SaveButtonStyle = {
        width: '10%',
        backgroundColor: 'rgb(55, 114, 71)',
        color: 'rgb(229, 252, 235)'
    }
    return (
        <main>
             <div className='tittle'>
                <h2>Editar Aluno</h2>
            </div>
            <div className='edit_box'>
            <form className='form_box' onSubmit={updateEntity}>
                <Input dissable={true} input_label={'Id'} value={aluno.id} width={10} onChange={handleChange} id={'id'}></Input>
                <Input input_label={'Nome'} value={aluno.nome} width={40} onChange={handleChange} id={'nome'}></Input>
                <Input input_label={'Idade'} value={aluno.idade} width={10} onChange={handleChange} id={'idade'}></Input>
                <Input input_label={'Email'} value={aluno.email} width={40} onChange={handleChange} id={'email'}></Input>
                <Combobox data={ListSala} placeholder='selecione a sala' textField='sala' dataKey='id'  onChange={(value) => setAluno(prev => ({ ...prev, idSala: value.id }))} value={aluno.idSala} id={'idSala'}/>
                <div className="buttons_line">
                 <Button buttonText={'Salvar'} type='submit' style={SaveButtonStyle} onclick={updateEntity}></Button>
                 <Button buttonText={'Deletar'} style={DeleteButtonStyle} onclick={deleteEntity}></Button>
                </div>
            </form>
            </div>
        </main>
    )
}