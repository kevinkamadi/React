import React from 'react'
import TransactionSearch from './TransactionSearch'
import TransactionListTable from './TransactionListTable'

function Transactions({transactions, handleSearch, handleSort, handleDelete, showSearchLoadingIcon}) {
    return (
        <>
            <TransactionSearch handleSearch={handleSearch} showSearchLoadingIcon={showSearchLoadingIcon}/>
            <TransactionListTable transactions={transactions} handleSort={handleSort} handleDelete={handleDelete}/>
        </>
    )
}

export default Transactions