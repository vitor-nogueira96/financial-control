import React, { Component } from 'react'
import Card from '../Cards/Card'
import './Resume.css'
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign,
} from "react-icons/fa"

export default class Resume extends Component {
  render() {
    const { income, expense, total } = this.props;
    
    return (
      <div className="container-resume">
        <Card title="Entrada" Icon={FaRegArrowAltCircleUp} value={income} />
        <Card title="Saídas" Icon={FaRegArrowAltCircleDown} value={expense} />
        <Card title="Total" Icon={FaDollarSign} value={total} />
      </div>
    )
  }
}
