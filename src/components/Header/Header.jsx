import React, { Component } from 'react'
import './Header.css'
import { FaDollarSign } from "react-icons/fa"


export default class Header extends Component {
  render() {
    return (
      <div className='container-header'>
        <div className="header"> 
           <h1 className="title"> <FaDollarSign/> Controle Financeiro </h1> 
        </div>
      </div>
    )
  }
}
