import './main_header.css'
import { Link } from 'react-router-dom'
export default function Mainheader() {
    return(
       <div className="header">
            <ul className="header_options">
               <Link to="/"> <li><h3>Home</h3></li> </Link>
                <li><h3>Sair</h3></li>
            </ul>
       </div>
    )
}