import React, { useState } from 'react'
import './Form.css'


const Form = () => {
    const [desc, setDesc] = useState("");
    const[amount, setAmount] = useState("");
    const [isExpense, setExpense] = useState(false)

    return (
      <div className="container-form">
        <div className="input-content">
          <input type="text" className="description"/>
          <input type="text" className="value"/>
        </div> 
        <div className="container-radio">
          <input type="radio" name="" id="" /> Entrada
          <input type="radio" name="" id="" /> Saída
        </div>
        <button></button>
      </div>
  )
}

export default Form;

