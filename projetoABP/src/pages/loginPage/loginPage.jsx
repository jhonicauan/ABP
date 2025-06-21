import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css'
import { FaUser, FaLock } from "react-icons/fa6";
import { db } from '../../../db';
export default function LoginPage() {
    const [email,setEmail] = useState("");
    const [senha,setSenha] = useState("");
    const navigate = useNavigate();
    const login = (e) => {
    e.preventDefault();

    useEffect(()=>{
        if(localStorage.getItem('id')){
            navigate('/home');
        }
    },[navigate])
    const adm = db.administrador.find(adm => adm.email === email && adm.senha === senha);
    if (adm) {
        localStorage.setItem('id', adm.id);
        localStorage.setItem('tipo', 'administrador');
        navigate("/home");
        return;
    }

    const professor = db.professores.find(prof => prof.email === email && prof.senha === senha);
    if (professor) {
        localStorage.setItem('id', professor.id);
        localStorage.setItem('tipo', 'professores');
        navigate("/home");
        return;
    }

    const aluno = db.alunos.find(aluno => aluno.email === email && aluno.senha === senha);
    if (aluno) {
        localStorage.setItem('id', aluno.id);
        localStorage.setItem('tipo', 'alunos');
        navigate("/home");
        return;
    }

    alert("Login inválido");
};

    return (
        <>
        <form>
            <div className="container">
                <div className="title">
                    <h2 className='title_text'>Entrar</h2>
                </div>

                <div className="content">
                    <div className="input_wrapper">
                        <FaUser className='input_icon' />
                        <input type="email" placeholder='Email' name="email" id="email" className='input_info name'
                        value={email} onChange={(e)=> {setEmail(e.target.value)}}/>
                    </div>

                    <div className="input_wrapper">
                        <FaLock className='input_icon' />
                        <input type="password" placeholder='Senha' name="senha" id="senha" className='input_info senha' 
                        value={senha} onChange={(e)=> {setSenha(e.target.value)}}/>
                    </div>

                    <button className='action_btn login_btn' onClick={login}>Conectar</button>
                </div>
            </div>
        </form>
        </>
    )
}