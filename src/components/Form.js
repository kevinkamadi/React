import React, { useEffect, useState } from 'react'

function Form({categories, addNewTransaction}) {

    const [isVisible, setVisible] = useState(false)
    const [hideStatus, setHideStatus] = useState('hide')
    const [icon, setIcon] = useState('fa-solid fa-chevron-down fa-rotate-270')
    const [formData, setFormData] = useState({
        date: '',
        description: '',
        category: '',
        amount: ''
    })

    const options = categories.map( (category) => {
        return <option key={category} value={category}>{category}</option>
    })

    function handleFormToggle() {
        if(isVisible){
            setVisible(isVisible => !isVisible)
            setHideStatus(hideStatus => hideStatus = 'hide')
            setIcon('fa-solid fa-chevron-down fa-rotate-270')
        }else{
            setVisible(isVisible => !isVisible)
            setHideStatus(hideStatus => hideStatus = 'show')
            setIcon('fa-solid fa-chevron-down')
        }
    }

    function handleFormDataUpdate(e) {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        addNewTransaction(formData)
        setFormData({
            date: '',
            description: '',
            category: '',
            amount: ''
        })
        handleFormToggle()
    }

    return (
        <div id='form'>
            <div className='transaction-form-title-container' onClick={handleFormToggle}>
                <p className='transaction-form-title'>Add New transaction</p>
                <i className={icon}></i>
            </div>
            <form id='transaction-form' className={hideStatus} onSubmit={handleSubmit}>
                <label htmlFor='date'>Transaction Date</label>
                <input type='date' name='date' id='date' className='form-item' value={formData.date} onChange={handleFormDataUpdate} required/>
                <label htmlFor='description'>Transaction Description</label>
                <textarea rows='4' placeholder='Add a description for the transaction' name='description' className='form-item' value={formData.description} onChange={handleFormDataUpdate} required/>
                <label htmlFor='category'>Transaction Category</label>
                <select name='category' className='form-item' value={formData.category}  onChange={handleFormDataUpdate} required>
                    <option value=''>Category</option>
                    {options}
                </select>
                <label htmlFor='amount'>Transaction Amount</label>
                <input type='number' name='amount' placeholder='Enter amount' className='form-item' value={formData.amount} onChange={handleFormDataUpdate} required/>
                <input type='submit' value='Save Transaction' className='form-item'/>
            </form>
        </div>
    )
}

export default Form