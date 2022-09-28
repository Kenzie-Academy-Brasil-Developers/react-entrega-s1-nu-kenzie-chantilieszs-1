import "../CardSaida/style.css"
import { FaTrash } from 'react-icons/fa'
const CardSaida = ({descricao, tipo, valor, remove,transaction}) => {
    return (
        <li className="card-saida">
            <div>
                <h3>{descricao}</h3>
                <p>{tipo}</p>
            </div>
            <div>
                <p>{valor}</p>
                <button onClick={() =>  {
                  remove(transaction)
                }} type="button"><FaTrash /></button>
            </div>
        </li>
    )
}

export default CardSaida;