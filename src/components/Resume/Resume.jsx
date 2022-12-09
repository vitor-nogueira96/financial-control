import React, { Component } from 'react'
import Cards from '../Cards/Cards';
import { FaRegArrowAltCircleUp, FaRegArrowAltCircleDown, FaDollarSign } from 'react-icons/fa'
import './Resume.css'

class Resume extends Component {
  render() {
    return (
      <div className='resume-container'>
        <Cards title="Entradas" Icon={ FaRegArrowAltCircleUp } value='a' />
        <Cards title="Saídas" Icon={FaRegArrowAltCircleDown} value='b' />
        <Cards title="Total"Icon={FaDollarSign} value='c' />
      </div>
    )
  }
}

export default Resume;
