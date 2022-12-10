import React, { Component } from 'react'
import Cards from '../Cards/Cards';
import { FaRegArrowAltCircleUp, FaRegArrowAltCircleDown, FaDollarSign } from 'react-icons/fa'
import './Resume.css'

class Resume extends Component {
  render() {
    const { income, expense, total} = this.props
    return (
      <div className='resume-container'>
        <Cards title="Entradas" Icon={ FaRegArrowAltCircleUp } value={income} />
        <Cards title="Saídas" Icon={FaRegArrowAltCircleDown} value={expense} />
        <Cards title="Total"Icon={FaDollarSign} value={total} />
      </div>
    )
  }
}

export default Resume;
