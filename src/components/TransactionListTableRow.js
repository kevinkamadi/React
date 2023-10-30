import React from 'react'

function TransactionListTableRow({ date, description, category, amount, children }) {
  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
      {children}
    </tr>
  )
}

export default TransactionListTableRow