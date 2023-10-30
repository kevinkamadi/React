import React, { useEffect, useState } from 'react'

function TransactionSearch({ handleSearch, showSearchLoadingIcon }) {

  const [query, setQuery] = useState('')

  useEffect(() => {
    handleSearch(query)
  }, [query])

  return (
    <div className='search-container' id='search'>
      <p id='search-title'>Transaction History</p>
      <form id='search-form' onSubmit={() => handleSearch(query)}>
        <label htmlFor='search'>Search for transactions</label>
        <div id='search-input-container'>
          <input id='search-form-input' name='search' type='text' placeholder='Enter text to search' value={query} onChange={(e) => setQuery(e.target.value)} />
          <button id='search-form-submit'>{showSearchLoadingIcon ? <i className="fa-solid fa-circle-notch fa-spin"></i> : <i className="fa-solid fa-magnifying-glass"></i>}</button>
        </div>
      </form>
    </div>
  )
}

export default TransactionSearch