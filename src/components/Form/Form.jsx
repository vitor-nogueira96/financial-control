import React, { useState } from 'react'
import './Form.css'

const Form = () => {
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
      
      const transactions = {
        id: generateId(),
        desc: desc,
        amount: amount,
        expense: isExpense,
      }
    }


    return (
      <div className='form-container'>
        <div className='input-container'>
          
          <label htmlFor="description">
            Descrição: 
          <input
          type="text"
          id='description'
          value={desc}
          onChange={(e => setDesc(e.target.value))}
          />
          </label>

          <label htmlFor="valor">
            Valor:
            <input
              type='number'
              id='valor'
              value={amount}
              onChange={(e => setDesc(e.target.value))}
              />
          </label>
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

        <button type='button'>Salvar</button>
      </div>
    )
}

export default Form