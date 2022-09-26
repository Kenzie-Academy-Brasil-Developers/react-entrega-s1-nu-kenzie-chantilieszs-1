
import "../TotalMoney/style.css"

const ValorTotal = ({listTransactions}) => {
    const total = Number(
        listTransactions.reduce((acc, cur) => {
          if (cur.type === "Saída") {
            return acc - cur.value;
          }else {
            return acc + + cur.value;
          }  
        }, 0)
    ).toLocaleString("pt-BR", {
        currency: "BRL",
        style: "currency",
        minimumIntegerDigits: 2
    });

    return (
        <div className="container-total">
            <div>
                <p>Valor total:</p>
                <p>{total}</p>
            </div>
            <p>O valor se refere ao saldo</p>
        </div>
    )
}

export default ValorTotal;