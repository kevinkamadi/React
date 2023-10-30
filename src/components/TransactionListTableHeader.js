import React from 'react'

function TransactionListTableHeader({handleSort}) {
    return (
        <thead>
            <tr>
                <th>Date</th>
                <th onClick={ (e) => handleSort('description')}>Description <i className="fa-solid fa-angle-down"></i></th>
                <th onClick={ (e) => handleSort('category')}>Category <i className="fa-solid fa-angle-down"></i></th>
                <th>Amount</th>
                <th></th>
            </tr>
        </thead>
    )
}

export default TransactionListTableHeader