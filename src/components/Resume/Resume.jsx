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
    return (
      <div className="container-resume">
        <Card title="Entrada" Icon={FaRegArrowAltCircleUp} value={1000} />
        <Card title="Saídas" Icon={FaRegArrowAltCircleDown} value={1000} />
        <Card title="Total" Icon={FaDollarSign} value={1000} />
      </div>
    )
  }
}
