import { useState } from "react";
import "../Form/style.css";

const Formulario = ({onAddTransactions}) => {

  const [description, setDescription] = useState('')
  const [type, setTipo] = useState('')
  const [value, setValor] = useState('')

  function adicionarExtrato(event) {
    event.preventDefault();
    const data = {
      description,
      type,
      value
    }
    onAddTransactions(data)
  }

  return (
    <form onSubmit={adicionarExtrato} className="formulario-extrato">
      <p>Descrição</p>
      <input
        type="text"
        placeholder="Digite aqui sua descrição..."
        className="input-descricao"
        required
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <blockquote>Ex: Compra de roupas</blockquote>
      <div className="valor-tipo">
        <p>Valor</p>
        <p>Tipo de valor</p>
      </div>
      <div className="container-select">
        <div className="select-valor">
          <input 
          type="number" 
          placeholder="0" 
          required
          value={value}
          onChange={e => setValor(e.target.value)}
          />
          <p>R$</p>
        </div>
        <div className="container-tipo">
          <select 
          value={type} 
          onChange={e => setTipo(e.target.value)}>
            <option value="Tipo">Selecione</option>
            <option value="Entrada">Entrada</option>
            <option value="Saída">Saída</option>
          </select>
        </div>
      </div>
      <button type="submit" className="btn-valor">Inserir valor</button>
    </form>
  );
};

export default Formulario;
