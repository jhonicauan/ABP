import './addLecionaPage.css'
import Input from '../../components/input/input'
import Button from '../../components/button/button'
import { adim } from '../../entities/adm'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Combobox from "react-widgets/Combobox";
import { db } from '../../../db'


export default function AddLecionaPage() {
    const [leciona, setLeciona] = useState({
        id: '',
        idProfessor:'',
        idMateria:'',
        idSala:''
    })
    const ListProfessor = db.professores.map(professores => ({id:professores.id, nome:professores.nome}))
    const ListMateria = db.materias.map(materias => ({id:materias.id,nome:materias.nome}))
    const ListSala = db.salas.map(salas => ({id:salas.id, sala:salas.sala}))
    const navigate = useNavigate()

    const handleChange = (e) => {
        const key = e.target.id
        setLeciona(prevLeciona => ({ ...prevLeciona, [key]: e.target.value }))
    }

    const addEntity = (e) => {
        e.preventDefault()
        adim.add('leciona', leciona)
        navigate('/listLeciona')
    }

    const AddButtonStyle = {
        width: '10%',
        backgroundColor: 'rgb(55, 114, 71)',
        color: 'rgb(229, 252, 235)'
    }

    return (
        
        <main>
            <div className='tittle'>
                <h2>Adicionar Leciona</h2>
                
            </div>
            <div className='edit_box'>
                <form className='form_box' onSubmit={addEntity}>
                    <Input input_label={'Id'} value={leciona.id} width={10} onChange={handleChange} id={'id'} />
                    <Combobox data={ListProfessor} placeholder='selecione o professor' textField='nome' dataKey='id' onChange={(value) => setLeciona(prev => ({ ...prev, idProfessor: value }))} value={leciona.idProfessor} id={'idProfessor'}/>
                    <Combobox data={ListMateria} placeholder='selecione a materia'textField='nome' dataKey='id' onChange={(value) => setLeciona(prev => ({ ...prev, idMateria: value }))} value={leciona.idMateria} id={'idMateria'}/>
                    <Combobox data={ListSala} placeholder='selecione a sala' textField='sala' dataKey='id' onChange={(value) => setLeciona(prev => ({ ...prev, idSala: value }))} value={leciona.idSala} id={'idSala'}/>
                    <div className="buttons_line">
                        <Button buttonText={'Adicionar'} type='submit' style={AddButtonStyle} onclick={addEntity} />
                    </div>
                </form>
            </div>
        </main>
    )
}
