import React, { useEffect, useState } from 'react'
import Header from './components/Header';
import Form from './components/Form';
import Transactions from './components/Transactions';
import headerNavigationItems from './data/headers';
import categories from './data/categories';

function App() {

  const [transactionsData, setTransactionsData] = useState([])
  const [transactionsDataPrimary, setTransactionsDataPrimary] = useState([])
  const [showSearchLoadingIcon, setShowSearchLoadingIcon] = useState(false)
  const [searchText, setSearchText] = useState('')

  useEffect(() => {
    fetch('http://localhost:3007/transactions')
    .then(res => res.json())
    .then(data => {
      setTransactionsData(data)
      setTransactionsDataPrimary(data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  function handleTransactionDelete(transactionId) {
    const updatedTransactionsData = [...transactionsDataPrimary].filter(item => {
      return (item.id !== transactionId)
    })
    if(searchText !== ''){
      setTransactionsData([...updatedTransactionsData].filter(item => {
        return (item.description.toLowerCase().includes(searchText.toLowerCase()))
      }))
    }else{
      setTransactionsData(updatedTransactionsData)
    }
    setTransactionsDataPrimary(updatedTransactionsData)
  }

  function handleSearch(searchQuery) {
    setSearchText(searchQuery)
    setShowSearchLoadingIcon(true)
    setTransactionsData([...transactionsDataPrimary].filter(item => {
      return (item.description.toLowerCase().includes(searchQuery.toLowerCase()))
    }))
    setShowSearchLoadingIcon(false)
  }

  function handleSort(sortBy) {
    const updated = [...transactionsData].sort( (a, b) => {
      if (a[sortBy] < b[sortBy]) return -1
      if (a[sortBy] > b[sortBy]) return 1
      return 0
    })
    setTransactionsData(updated)
  }

  function handleAddNewTransaction(transaction){
    fetch('http://localhost:3007/transactions', 
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(transaction)
    })
    .then(response => {
      return response.json()
    })
    .then(data => {
      setTransactionsData([...transactionsDataPrimary, data])
      setTransactionsDataPrimary([...transactionsDataPrimary, data])
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }

  return (
    <div className="App">
      <Header navItems={headerNavigationItems} />
      <Form categories={categories} addNewTransaction={handleAddNewTransaction} />
      <Transactions transactions={transactionsData} handleSearch={handleSearch} handleSort={handleSort} handleDelete={handleTransactionDelete} showSearchLoadingIcon={showSearchLoadingIcon} />
    </div>
  );
}

export default App;