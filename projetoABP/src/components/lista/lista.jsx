import './lista.css'
import edit_icon from './images/edit_icon.png'
import { Link } from 'react-router-dom'
export default function Lista({entityList, keyException}) {
    const EntityKeys = Object.keys(entityList[0])
    const Keys = EntityKeys.filter(key => key != 'password' && key != keyException)
    return (
        <div className='list_main_box'>
        <ListHeader keyList={Keys}></ListHeader>
        <div className='list_inner_box'>
         <ListContent keyList={Keys} entityList={entityList}></ListContent>
        </div>
     
        </div>
    )
}

function ListHeader({keyList}) {
    return (
         <ul className='list_header'>
            {keyList.map(keyItem => (
                <li>
                    <h3>{keyItem}</h3>
                    <hr className='line_items'/>
                </li>
            ))}
            <li>
                <h3>Editar</h3>
            </li>
        </ul>
    ) 
}

function ListContent({entityList, keyList}) {
    return(
        <>
         {entityList.map(listItem => (
        <ul className="list_entity">
                    {keyList.map(keyItem => (
                <li>
                        <h5>{listItem[keyItem]}</h5>
                        <hr className='line_items'/>
                </li>
                    ))}
                    <li>
                        <Link to="/editalunos">
                         <div className='image_box'>
                        <img src={edit_icon} alt="edit_icon" />
                        </div>
                        </Link>
                    </li>
        </ul>
            ))}
        </>
    )
}