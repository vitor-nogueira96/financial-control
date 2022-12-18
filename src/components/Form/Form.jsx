import React, { useState } from "react";
import Grid from "../Grid/Grid";
import "./Form.css";

const Form = ({ handleAdd, transactionsList, setTransactionsList }) => {
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [isExpense, setExpense] = useState(false);

  const generateID = () => Math.round(Math.random() * 1000);

  const handleSave = () => {
    if (!desc || !amount) {
      alert("Informe a descrição e o valor!");
      return;
    } else if (amount < 1) {
      alert("O valor tem que ser positivo");
      return;
    }

    const transaction = {
      id: generateID(),
      desc: desc,
      amount: amount,
      expense: isExpense,
    };

    handleAdd(transaction);

    setDesc("");
    setAmount("");
  };

  return (
    <>
      <div className="container-form">
        <div className="input-content-description">
          <input
            type="text"
            className="description"
            placeholder="Descrição"
            value={desc}
            onChange={(event) => setDesc(event.target.value)}
          />
        </div>

        <div className="input-content-value">
          <input
            type="number"
            className="description"
            placeholder="Valor"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
          />
        </div>
        <div className="container-radio">
          <label htmlFor="rIncome">
            <input
              type="radio"
              name="group1"
              id="rIncome"
              defaultChecked
              onChange={() => setExpense(!isExpense)}
            />{" "}
            Entrada
          </label>
          <label htmlFor="rExpenses">
            <input
              type="radio"
              name="group1"
              id="rExpenses"
              onChange={() => setExpense(!isExpense)}
            />{" "}
            Saída
          </label>
        </div>
        <button onClick={handleSave}>Salvar</button>
      </div>
      <Grid itens={transactionsList} setItens={setTransactionsList} />
    </>
  );
};

export default Form;
