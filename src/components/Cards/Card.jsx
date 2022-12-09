import React, { Component } from 'react'
import './Card.css'

export default class Card extends Component {
  render() {
    const { Icon, title, value } = this.props;
    return (
      <div className="container-card">
        <header className="header">
          <div>{title}</div>
          <Icon /> 
        </header>
        <span>{value}</span>
      </div>
    )
  }
}
