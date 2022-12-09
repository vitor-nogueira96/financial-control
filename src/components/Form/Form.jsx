import React, { Component } from 'react'
import './Form.css'

export default class Form extends Component {
  render() {
    const [desc, setDesc] = useState("");
    const [amount, setAmount] = useState("");
    const [isExpense, setExpense] = useState("");
    
    return (
      <div className='form-container'>
        <div className='input-container'>
          <label htmlFor="description">
            Descrição  
          <input type="text" id='description'/>
          </label>
          <label htmlFor="valor">
            Valor  
            <input type='text' id='valor'/>
          </label>
        </div>

        <div className='radio-container'>
          <label htmlFor="entrada">
            Entrada
            <input type="radio" name="entrada" id="" />
          </label>

          <label htmlFor="saida">
            Saida
            <input type='radio' name='saida' />
          </label>
        </div>

        <button type='button'>Salvar</button>
      </div>
    )
  }
}
