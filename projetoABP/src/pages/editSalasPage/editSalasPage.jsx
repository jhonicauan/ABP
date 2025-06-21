import './editSalasPage.css'
import Input from '../../components/input/input'
import Button from '../../components/button/button'
import { adim } from '../../entities/adm'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function EditAlunosPage() {
    const {idSala} = useParams()
    const [sala, setSala] = useState(adim.find('salas', idSala))
    const navigate = useNavigate();
    const deleteEntity = () => {
        adim.delete('salas', idSala)
        navigate('/listsalas')
    }
    const updateEntity = (e) => {
        e.preventDefault()
        adim.update('salas', idSala, sala)
        navigate('/listsalas')
    }
    const handleChange = (e) => {
        const key = e.target.id
        setSala(prevSala => ({...prevSala, [key]: e.target.value}))
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
                <h2>Editar Sala</h2>
            </div>
            <div className='edit_box'>
            <form className='form_box' onSubmit={updateEntity}>
                <Input dissable={true} input_label={'Id'} value={sala.id} width={10} onChange={handleChange} id={'id'}></Input>
                <Input input_label={'Sala'} value={sala.sala} width={40} onChange={handleChange} id={'sala'}></Input>
                <div className="buttons_line">
                 <Button buttonText={'Salvar'} type='submit' style={SaveButtonStyle} onclick={updateEntity}></Button>
                 <Button buttonText={'Deletar'} style={DeleteButtonStyle} onclick={deleteEntity}></Button>
                </div>
            </form>
            </div>
        </main>
    )
}