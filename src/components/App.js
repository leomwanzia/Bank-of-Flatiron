import React from "react";
import AccountContainer from "./AccountContainer";
import React, {useEffect, useState} from "react";
import { transactions } from "../transactionsData";
import AddTransactionForm from "./AddTransactionForm";
import Search from "./Search";

function App() {
  const [transactions,setTransactions]=useState([])
  useEffect(()=>{
    fetch("http://localhost:8001/transactions")
    .then(r=>r.json())
    .then(transc=>setTransactions(transc))
  },[])
  // console.log(transactions)
  function  handleUpdateOnSubmission(transaction){ 
    // console.log(transaction)
    // setTransactions(transactions=>[...transactions,transaction])
    const serverOptions={
      method: "POST",
      headers:{
        "content-Type":"application/json"
      },
      body:JSON.stringify(transaction)
    }
    fetch("http://localhost:8001/transactions",serverOptions)
    .then(r=>r.json)
    .then(newItem=>setTransactions(transactions=>[...transactions,newItem]))
    .catch(err=>console(err))
  }
const searchFilter=""
const filteredTransactions=transactions.filter(transaction=>searchFilter===""?true:s)

  function handleOnSearch(search){
    setTransactions(transactions=>transactions.filter(transaction=>transaction.description.includes(search)))
  }
  return (
    <div className="ui raised segment">
      <div className="ui segment violet inverted">
        <h2>The Royal Bank of Flatiron</h2>
      </div>
      <Search onSearch={handleOnSearch} />
      <AddTransactionForm onSubmission={handleUpdateOnSubmission} />
      <Transactions transactions={transactions}/> 
      <AccountContainer />
    </div>
  );
}

export default App;
