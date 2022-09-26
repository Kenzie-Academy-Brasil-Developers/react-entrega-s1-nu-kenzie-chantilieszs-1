import { useState } from "react";
import "./index.css";
import "./App.css";
import Header from "./Components/Header";
import Formulario from "./Components/Form";
import ValorTotal from "./Components/TotalMoney";
import Card from "./Components/CardEntrada";
import CardSaida from "./Components/CardSaida";
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
  function exibirTodos() {
    
  }

  return (
    <div className="App">
      <Header />
      <section className="Container">
        <div className="container-form">
          <Formulario onAddTransactions={saveTransaction} />
          <ValorTotal listTransactions={listTransactions} />
        </div>
        <div className="container-list">
          <div className="list-header">
            <p>Resumo financeiro</p>
            <div>
              <button type="button" onClick={exibirTodos()}>
                Todos
              </button>
              <button>Entradas</button>
              <button>Despesas</button>
            </div>
          </div>
          <ul className="list-cards">
            {listTransactions.map((Transaction, index) => {
              if (Transaction.type === "Entrada") {
                return (
                  <Card
                    key={index}
                    descricao={Transaction.description}
                    tipo={Transaction.type}
                    valor={Transaction.value}
                  />
                );
              } else {
                return (
                  <CardSaida
                    key={index}
                    descricao={"Transaction.description"}
                    tipo={Transaction.type}
                    valor={Transaction.value}
                  />
                );
              }
            })}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default App;
