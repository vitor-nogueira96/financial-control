import React, { useState } from 'react'
import Grid from '../Grid/Grid';
import './Form.css'

const Form = ({ handleAdd, transactionsList, setTransactionsList }) => {
    const [desc, setDesc] = useState("");
    const [amount, setAmount] = useState("");
    const [isExpense, setExpense] = useState(false);

    const generateId = () => Math.round(Math.random() * 1000)

    const handleSave = () => {
      if (!desc || !amount) {
        alert('Informe a descrição e o valor!');
        return;
      } else if (amount < 1) {
        alert('O valor tem que ser positivo!');
        return;
      }

      const transaction = {
        id: generateId(),
        desc: desc,
        amount: amount,
        expense: isExpense,
      }

      handleAdd(transaction)

      setDesc('');
      setAmount('');
    };

    return (
      <>
        <div className='form-container'>
          <div className='input-container'>
            
            <label htmlFor="description">
              Descrição: 
            </label>
            <input
            type="text"
            id='description'
            value={desc}
            onChange={((e) => setDesc(e.target.value))}
            />
            

            <label htmlFor="valor">Valor:</label>
              
              <input
                type='number'
                id='valor'
                value={amount}
                onChange={((e) => setAmount(e.target.value))}
                />
            
          </div>

          <div className='radio-container'>
            <label htmlFor="rIncome">
              Entrada:
              <input
                type="radio"
                id='rIncome'
                defaultChecked
                name="group1"
                onChange={() => setExpense(!isExpense)}
                />
            </label>

            <label htmlFor="rExpenses">
              Saida:
              <input
                type='radio'
                id='rExpenses'
                name='group1'
                onChange={() => setExpense(!isExpense)}

              />
            </label>
          </div>

          <button type='button' onClick={handleSave}>Salvar</button>
        </div>
        <Grid itens={transactionsList} setItens={setTransactionsList} />
      </>
    )
}

export default Form