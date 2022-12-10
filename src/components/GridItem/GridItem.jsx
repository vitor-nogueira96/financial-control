import React, { Component } from 'react'
import './GridItem.css'
import { FaRegArrowAltCircleUp, FaRegArrowAltCircleDown, FaTrash } from 'react-icons/fa'

export default class GridItem extends Component {
  render() {
    const { item, onDelete } = this.props;
    return (
      <tr>
        <td>{item.desc}</td>
        <td>{item.amount}</td>
        <td>
          {item.expense ? ( 
            <FaRegArrowAltCircleDown color='red' style={{display: 'flex', marginLeft: '42%'}} />
          ) : (
            <FaRegArrowAltCircleUp color='green' style={{display: 'flex', marginLeft: '42%'}} />
          )}
        </td>
        <td style={{display: 'flex', justifyContent: 'center'}}>
          <FaTrash onClick={() => onDelete(item.id)} style={{display: 'flex', cursor: 'pointer'}} />
        </td>
      </tr>
    )
  }
}
