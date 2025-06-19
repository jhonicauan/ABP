import './editProfessoresPage.css'
import Input from '../../components/input/input'
import Button from '../../components/button/button'
import { adim } from '../../entities/adm'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function EditProfessoresPage() {
    const {idProfessor} = useParams()
    const [professor, setProfessor] = useState(adim.find('professores', idProfessor))
    const navigate = useNavigate();
    const deleteEntity = () => {
        adim.delete('professores', idProfessor)
        navigate('/listaprofessores')
    }
    const updateEntity = (e) => {
        e.preventDefault()
        adim.update('professores', idProfessor, professor)
        navigate('/listaprofessores')
    }
    const handleChange = (e) => {
        const key = e.target.id
        setProfessor(prevProfessor => ({...prevProfessor, [key]: e.target.value}))
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
                <h2>Editar Professor</h2>
            </div>
            <div className='edit_box'>
            <form className='form_box' onSubmit={updateEntity}>
                <Input input_label={'Id'} value={professor.id} width={10} onChange={handleChange} id={'id'}></Input>
                <Input input_label={'Nome'} value={professor.name} width={40} onChange={handleChange} id={'name'}></Input>
                <Input input_label={'Telefone'} value={professor.idade} width={11} onChange={handleChange} id={'telefone'}></Input>
                <Input input_label={'Email'} value={professor.email} width={40} onChange={handleChange} id={'email'}></Input>
                <div className="buttons_line">
                 <Button buttonText={'Salvar'} type='submit' style={SaveButtonStyle} onclick={updateEntity}></Button>
                 <Button buttonText={'Deletar'} style={DeleteButtonStyle} onclick={deleteEntity}></Button>
                </div>
            </form>
            </div>
        </main>
    )
}