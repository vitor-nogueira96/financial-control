import GridItem from '../GridItem/GridItem'
import './Grid.css'

const Grid = ({ itens, setItens}) => {
  const onDelete = (ID) => {
    const newArray = itens.filter((transaction) => transaction.id !== ID);
    setItens(newArray);
    localStorage.setItem('transactions', JSON.stringify(newArray));
  }

  return (
    <table className='table-container'>
      <thead>
        <tr>
          <th style={ { width: '40%'} }>
            Descrição
          </th>

          <th style={ { width: '40%'} }>
            Valor
          </th>

          <th style={ { width: '10%'} }>
            Tipo
          </th>

          <th style={ { width: '10%'} }>Delete</th>
        </tr>
      </thead>
      <tbody>
        {itens?.map((item, index) => (
          <GridItem key={index} item={item} onDelete={onDelete} />
        ))}
      </tbody>
    </table>
  )
} 

export default Grid;