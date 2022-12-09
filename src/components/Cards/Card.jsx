import React, { Component } from 'react'
import './Card.css'

export default class Card extends Component {
  render() {
    return (
      <div className="container-card">
        <header className="header">
          <p>entrada</p>
          <img src="icon" alt="icon" />
          <span>1000</span>
        </header>
      </div>
    )
  }
}
