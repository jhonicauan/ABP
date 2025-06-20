import './editLecionaPage.css'
import Input from '../../components/input/input'
import Button from '../../components/button/button'
import { adim } from '../../entities/adm'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Combobox from "react-widgets/Combobox";
import { db } from '../../../db'

export default function EditLecionaPage() {
    const {idLeciona} = useParams()
    const [leciona, setLeciona] = useState(adim.find('leciona', idLeciona))
    const ListProfessor = db.professores.map(professores => ({id:professores.id, nome:professores.nome}))
    const ListMateria = db.materias.map(materias => ({id:materias.id,nome:materias.nome}))
    const ListSala = db.salas.map(salas => ({id:salas.id, sala:salas.sala}))
    const navigate = useNavigate();
    const deleteEntity = () => {
        adim.delete('leciona', idLeciona)
        navigate('/listleciona')
    }
    const updateEntity = (e) => {
        e.preventDefault()
        adim.update('leciona', idLeciona, leciona)
        navigate('/listleciona')
    }
    const handleChange = (e) => {
        
        const key = e.target.id
        setLeciona(prevleciona => ({...prevleciona, [key]: e.target.value}))
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
                <h2>Editar leciona</h2>
            </div>
            <div className='edit_box'>
            <form className='form_box' onSubmit={updateEntity}>
                <Input input_label={'Id'} value={leciona.id} width={10} onChange={handleChange} id={'id'}></Input>
                  <Combobox data={ListProfessor} placeholder='selecione o professor' textField='nome' dataKey='id' onChange={(value) => setLeciona(prev => ({ ...prev, idProfessor: value.id }))} value={leciona.idProfessor} id={'idProfessor'}/>
                    <Combobox data={ListMateria} placeholder='selecione a materia'textField='nome' dataKey='id' onChange={(value) => setLeciona(prev => ({ ...prev, idMateria: value.id }))} value={leciona.idMateria} id={'idMateria'}/>
                    <Combobox data={ListSala} placeholder='selecione a sala' textField='sala' dataKey='id' onChange={(value) => setLeciona(prev => ({ ...prev, idSala: value.id }))} value={leciona.idSala} id={'idSala'}/>
                <div className="buttons_line">
                 <Button buttonText={'Salvar'} type='submit' style={SaveButtonStyle} onclick={updateEntity}></Button>
                 <Button buttonText={'Deletar'} style={DeleteButtonStyle} onclick={deleteEntity}></Button>
                </div>
            </form>
            </div>
        </main>
    )
}