import './addSalasPage.css'
import Input from '../../components/input/input'
import Button from '../../components/button/button'
import { adim } from '../../entities/adm'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AddSalasPage() {
    const ids = db.salas.map(sala => sala.id);
    const novoId = Math.max(ids)+1;
    const [sala, setSala] = useState({
        id: novoId,
        sala: ''
    })

    const navigate = useNavigate()

    const handleChange = (e) => {
        const key = e.target.id
        setSala(prevSala => ({ ...prevSala, [key]: e.target.value }))
    }

    const addEntity = (e) => {
        e.preventDefault()
        adim.add('salas', sala)
        navigate('/listsalas')
    }

    const AddButtonStyle = {
        width: '10%',
        backgroundColor: 'rgb(55, 114, 71)',
        color: 'rgb(229, 252, 235)'
    }

    return (
        <main>
            <div className='tittle'>
                <h2>Adicionar Sala</h2>
            </div>
            <div className='edit_box'>
                <form className='form_box' onSubmit={addEntity}>
                    <Input input_label={'Sala'} value={sala.sala} width={40} onChange={handleChange} id={'sala'} />
                    <div className="buttons_line">
                        <Button buttonText={'Adicionar'} type='submit' style={AddButtonStyle} onclick={addEntity} />
                    </div>
                </form>
            </div>
        </main>
    )
}
