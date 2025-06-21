import './lista.css'
import edit_icon from './images/edit_icon.png'
import { Link } from 'react-router-dom'

export default function Lista({ entityList, keyException, editRoute, editar = true }) {
  const EntityKeys = Object.keys(entityList[0])
  const Keys = EntityKeys.filter(key => key !== 'password' && key !== keyException)

  return (
    <div className='list_main_box'>
      <ListHeader keyList={Keys} editar={editar} />
      <div className='list_inner_box'>
        <ListContent keyList={Keys} entityList={entityList} editRoute={editRoute} editar={editar} />
      </div>
    </div>
  )
}

function ListHeader({ keyList, editar }) {
  return (
    <ul className='list_header'>
      {keyList.map(keyItem => (
        <li key={keyItem}>
          <h3>{keyItem}</h3>
          <hr className='line_items' />
        </li>
      ))}
      {editar && (
        <li>
          <h3>Editar</h3>
        </li>
      )}
    </ul>
  )
}

function ListContent({ entityList, keyList, editRoute, editar }) {
  return (
    <>
      {entityList.map(listItem => (
        <ul className="list_entity" key={listItem.id}>
          {keyList.map(keyItem => (
            <li key={keyItem}>
              <h5>{listItem[keyItem]}</h5>
              <hr className='line_items' />
            </li>
          ))}
          {editar && (
            <li>
              <Link to={`${editRoute}/${listItem.id}`}>
                <div className='image_box'>
                  <img src={edit_icon} alt="edit_icon" />
                </div>
              </Link>
            </li>
          )}
        </ul>
      ))}
    </>
  )
}
