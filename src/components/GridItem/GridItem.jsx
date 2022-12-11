import React, { Component } from 'react'
import './GridItem.css'

import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaTrash,
} from "react-icons/fa"

export default class GridItem extends Component {
  render() {
    const { item, onDelete } = this.props;
    return (
      <tr>
        <td style={{textAlign: 'center'}}>{item.desc}</td>
        <td style={{textAlign: 'center'}}>{item.amount}</td>
        <td>
          {item.expense ? (
            <FaRegArrowAltCircleDown style={{display: 'flex', marginLeft: '40%'}} color="red" />
          ) : (
            <FaRegArrowAltCircleUp style={{display: 'flex', marginLeft: '40%'}}  color="green" />
          )}
        </td>
        <td style={{display: 'flex', justifyContent: 'center'}}>
          <FaTrash style={{display: 'flex', alignItems: 'center', cursor: 'pointer'}} onClick={() => onDelete(item.id)} />
        </td>
      </tr>
    )
  }
}
