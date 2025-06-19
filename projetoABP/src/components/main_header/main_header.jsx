import './main_header.css'
import { Link, useNavigate } from 'react-router-dom'

export default function Mainheader() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear();
        navigate("/"); 
    }

    const navbar1 = (
        <div className="header">
            <ul className="header_options">
                <Link to="/home">
                    <li><h3>Home</h3></li>
                </Link>
                <li onClick={handleLogout}>
                    <h3>Sair</h3>
                </li>
            </ul>
        </div>
    );

    const navbar2 = (
        <div className="header">
            <ul className="header_options">
                <Link to="/">
                    <li><h3>Login</h3></li>
                </Link>
            </ul>
        </div>
    );

    const id = localStorage.getItem('id');

    return id ? navbar1 : navbar2;
}
