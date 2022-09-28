import { useState } from "react";
import "./index.css";
import "./App.css";
import Header from "./Components/Header";
import Formulario from "./Components/Form";
import ValorTotal from "./Components/TotalMoney";
import Card from "./Components/CardEntrada";
import CardSaida from "./Components/CardSaida";
import Modal from "./Components/Modal";
function App() {
  const [listTransactions, setListTransactions] = useState([
    { description: "Salário recebido", type: "Entrada", value: 2500 },
    { description: "Conta de luz", type: "Saída", value: 150 },
  ]);

  function saveTransaction(transaction) {
    let newTransaction = [...listTransactions];
    newTransaction.push(transaction);
    setListTransactions(newTransaction);
  }
  

  
 
  const [isOpenModal, setIsOpenModal] = useState(true)

  function openModal() {
    setIsOpenModal(state => !state)
  }
  function remove(clickedItem) {
    const newTransactionlist = listTransactions.filter((transaction) => transaction !== clickedItem)

    setListTransactions(newTransactionlist)
  }

  return (
    <div className="App">
      <Header openModal={openModal}/>
      <Modal isOpen={isOpenModal}>
      <button type="button" onClick={openModal}>Iniciar</button>
      </Modal>
      <section className="Container">
        <div className="container-form">
          <Formulario onAddTransactions={saveTransaction} />
          <ValorTotal listTransactions={listTransactions} />
        </div>
        <div className="container-list">
          <div className="list-header">
            <p>Resumo financeiro</p>
            <div>
              <button type="button">
                Todos
              </button>
              <button type="button">Entradas</button>
              <button type="button">Despesas</button>
            </div>
          </div>
          <ul className="list-cards">
            {listTransactions.length ? (
              listTransactions.map((Transaction, index) => {
                if (Transaction.type === "Entrada") {
                  return (
                    <Card
                      
                      key={index}
                      descricao={Transaction.description}
                      tipo={Transaction.type}
                      valor={Transaction.value}
                      transaction ={Transaction}
                      remove={remove}
                    />
                  );
                } else {
                  return (
                    <CardSaida
                      key={index}
                      descricao={Transaction.description}
                      tipo={Transaction.type}
                      valor={Transaction.value}
                      transaction ={Transaction}
                      remove={remove}
                    />
                  );
                }
              })
            ) : (
              <h3 className="lancamento">Você ainda não possui nenhum lançamento</h3>
            )
          }
          </ul>
        </div>
      </section>
    </div>
  );
}

export default App;
