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
        <Card />
        <Card />
        <Card />
      </div>
    )
  }
}
