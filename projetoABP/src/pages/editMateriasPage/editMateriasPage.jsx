import './editMateriasPage.css'
import Input from '../../components/input/input'
import Button from '../../components/button/button'
import { adim } from '../../entities/adm'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function EditMateriasPage() {
    const {idMateria} = useParams()
    const [materia, setMateria] = useState(adim.find('materias', idMateria))
    const navigate = useNavigate();
    const deleteEntity = () => {
        adim.delete('materias', idMateria)
        navigate('/listmaterias')
    }
    const updateEntity = (e) => {
        e.preventDefault()
        adim.update('materias', idMateria, materia)
        navigate('/listmaterias')
    }
    const handleChange = (e) => {
        const key = e.target.id
        setMateria(prevMateria => ({...prevMateria, [key]: e.target.value}))
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
                <h2>Editar Materia</h2>
            </div>
            <div className='edit_box'>
            <form className='form_box' onSubmit={updateEntity}>
                <Input input_label={'Id'} value={materia.id} width={10} onChange={handleChange} id={'id'}></Input>
                <Input input_label={'Nome'} value={materia.nome} width={40} onChange={handleChange} id={'nome'}></Input>
                <div className="buttons_line">
                 <Button buttonText={'Salvar'} type='submit' style={SaveButtonStyle} onclick={updateEntity}></Button>
                 <Button buttonText={'Deletar'} style={DeleteButtonStyle} onclick={deleteEntity}></Button>
                </div>
            </form>
            </div>
        </main>
    )
}