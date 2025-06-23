import './addMateriasPage.css'
import Input from '../../components/input/input'
import Button from '../../components/button/button'
import { db } from '../../../db'
import { adim } from '../../entities/adm'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AddMateriasPage() {
    const ids = db.materias.map(materia => materia.id);
    const novoId = Math.max(ids)+1;
    const [materia, setMaterias] = useState({
        id: novoId,
        nome: ''
    })

    const navigate = useNavigate()

    const handleChange = (e) => {
        const key = e.target.id
        setMaterias(prevMaterias => ({ ...prevMaterias, [key]: e.target.value }))
    }

    const addEntity = (e) => {
        e.preventDefault()
        adim.add('materias', materia)
        navigate('/listmaterias')
    }

    const AddButtonStyle = {
        width: '10%',
        backgroundColor: 'rgb(55, 114, 71)',
        color: 'rgb(229, 252, 235)'
    }

    return (
        <main>
            <div className='tittle'>
                <h2>Adicionar Materia</h2>
            </div>
            <div className='edit_box'>
                <form className='form_box' onSubmit={addEntity}>
                    <Input input_label={'Nome'} value={materia.nome} width={40} onChange={handleChange} id={'nome'} />
                    <div className="buttons_line">
                        <Button buttonText={'Adicionar'} type='submit' style={AddButtonStyle} onclick={addEntity} />
                    </div>
                </form>
            </div>
        </main>
    )
}
