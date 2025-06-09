import './lista.css'
import edit_icon from './images/edit_icon.png'

export default function Lista({entityList, keyexception}) {
    const EntityKeys = Object.keys(entityList[0])
    const Keys = EntityKeys.filter(key => key != 'password' && key != keyexception)
    return (
        <div className='list_main_box'>
        <ul className="list_entity">
            {entityList.map(listItem => (
                <li>
                    {Keys.map(keyItem => (
                        <>
                        <h3>{keyItem}:</h3>
                        <h5>{listItem[keyItem]}</h5>
                        <hr className='line_items'/>
                        </>
                    ))}
                       <div className='image_box'>
                        <img src={edit_icon} alt="edit_icon" />
                        </div>
                </li>
            ))}
        </ul>
        </div>
    )
}