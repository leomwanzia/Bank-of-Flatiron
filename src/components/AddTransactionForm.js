import React from "react";
import {useState} from "react"

function AddTransactionForm({onSubmission}) {
  const [formData,setFormData]=useState({
    date:"",
    amount: 0,
    category:"",
    description: "",
  })
  function handleChange(e){
    setFormData({...formData, [e.target.name]:e.target.value})
  }
  function handleSubmit(e){
    e.preventDefault()
    onSubmission(formData)
  }
  return (
    <div className="ui segment">
      <form onSubmit={handleSubmit} onChange={handleChange} className="ui form">
        <div className="inline fields">
          <input value={formData.date} type="date" name="date"/>
          <input value={formData.description} type="text" name="description" placeholder="Description" />
          <input value={formData.category} type="text" name="category" placeholder="Category" />
          <input value={formData.amount} type="number" name="amount" placeholder="Amount" step="0.01" />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
