import './addProfessoresPage.css'
import Input from '../../components/input/input'
import Button from '../../components/button/button'
import { adim } from '../../entities/adm'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AddProfessoresPage() {
    const [professor, setProfessor] = useState({
        id: '',
        nome: '',
        email: '',
        telefone: '',
        senha: ''
    })

    const navigate = useNavigate()

    const handleChange = (e) => {
        const key = e.target.id
        setProfessor(prevProfessor => ({ ...prevProfessor, [key]: e.target.value }))
    }

    const addEntity = (e) => {
        e.preventDefault()
        adim.add('professores', professor)
        navigate('/listprofessores')
    }

    const AddButtonStyle = {
        width: '10%',
        backgroundColor: 'rgb(55, 114, 71)',
        color: 'rgb(229, 252, 235)'
    }

    return (
        <main>
            <div className='tittle'>
                <h2>Adicionar Professor</h2>
            </div>
            <div className='edit_box'>
                <form className='form_box' onSubmit={addEntity}>
                    <Input input_label={'Id'} value={professor.id} width={10} onChange={handleChange} id={'id'} />
                    <Input input_label={'Nome'} value={professor.nome} width={40} onChange={handleChange} id={'nome'} />
                    <Input input_label={'Email'} value={professor.email} width={40} onChange={handleChange} id={'email'} />
                    <Input input_label={'Telefone'} value={professor.telefone} width={20} onChange={handleChange} id={'telefone'} />
                    <Input input_label={'Senha'} value={professor.senha} width={10} onChange={handleChange} id={'senha'} />
                    <div className="buttons_line">
                        <Button buttonText={'Adicionar'} type='submit' style={AddButtonStyle} onclick={addEntity} />
                    </div>
                </form>
            </div>
        </main>
    )
}
