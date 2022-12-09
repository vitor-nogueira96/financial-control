import React, { Component } from 'react'
import './Cards.css'

export default class Cards extends Component {
  render() {
    const { title, Icon, value } = this.props
    return (
      <div className='card-container'>
        <header className='card-header-container'>
          <p>{title}</p>
          <svg>
          </svg>
          <Icon value={value}/>
        </header>
          <span>1000</span>
        </div>
    )
  }
}
