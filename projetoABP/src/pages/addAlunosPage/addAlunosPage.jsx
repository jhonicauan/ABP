import './addAlunosPage.css'
import { db } from '../../../db'
import Input from '../../components/input/input'
import Button from '../../components/button/button'
import { adim } from '../../entities/adm'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Combobox from "react-widgets/Combobox";
export default function AddAlunosPage() {
  const ids = db.alunos.map(aluno => aluno.id);
   const novoId = ids.length + 1;
    const [aluno, setAluno] = useState({
        id: novoId,
        nome: '',
        idade: '',
        email: '',
        senha: '',
        idSala: ''
    })

    useEffect(()=>{
        console.log(aluno)
    },[aluno])
    const ListSala = db.salas.map(salas => ({id:salas.id, sala:salas.sala}))
    const navigate = useNavigate()

    const handleChange = (e) => {
        const key = e.target.id
        setAluno(prevAluno => ({ ...prevAluno, [key]: e.target.value }))
    }

    const addEntity = (e) => {
        e.preventDefault()
        adim.add('alunos', aluno)
        navigate('/listalunos')
    }

    const AddButtonStyle = {
        width: '10%',
        backgroundColor: 'rgb(55, 114, 71)',
        color: 'rgb(229, 252, 235)'
    }

    return (
        <main>
            <div className='tittle'>
                <h2>Adicionar Aluno</h2>
            </div>
            <div className='edit_box'>
                <form className='form_box' onSubmit={addEntity}>
                    <Input input_label={'Nome'} value={aluno.nome} width={40} onChange={handleChange} id={'nome'} />
                    <Input input_label={'Idade'} value={aluno.idade} width={10} onChange={handleChange} id={'idade'} />
                    <Input input_label={'Email'} value={aluno.email} width={40} onChange={handleChange} id={'email'} />
                    <Input input_label={'Senha'} value={aluno.senha} width={40} onChange={handleChange} id={'senha'} />
                    <Combobox data={ListSala} placeholder='selecione a sala' textField='sala' dataKey='id' onChange={(value) => setAluno(prev => ({ ...prev, idSala: value.id }))} value={aluno.idSala} id={'idSala'}/>
                    <div className="buttons_line">
                        <Button buttonText={'Adicionar'} type='submit' style={AddButtonStyle} onclick={addEntity} />
                    </div>
                </form>
            </div>
        </main>
    )
}
