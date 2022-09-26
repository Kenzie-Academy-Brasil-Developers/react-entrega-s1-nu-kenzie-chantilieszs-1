import "../CardEntrada/style.css"
import { FaTrash } from 'react-icons/fa'
const Card = ({descricao, tipo, valor}) => {

    return (
        <li>
            <div>
                <h3>{descricao}</h3>
                <p>{tipo}</p>
            </div>
            <div>
                <p>{valor}</p>
                <button onClick={(e) =>  {
                  e.target.parentNode.parentNode.remove()
                }} type="button"><FaTrash /></button>
            </div>
        </li>
    )
}

export default Card;