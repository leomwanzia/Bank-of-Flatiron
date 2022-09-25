import React from "react";
import AccountContainer from "./AccountContainer";
import React, {useEffect, useState} from "react";
import { transactions } from "../transactionsData";

function App() {
  const [transactions,setTransactions]=useState([])
  useEffect(()=>{
    fetch("http://localhost:8001/transactions")
    .then(r=>r.json())
    .then(transc=>setTransactions(transc))
  },[])
  // console.log(transactions)
  return (
    <div className="ui raised segment">
      <div className="ui segment violet inverted">
        <h2>The Royal Bank of Flatiron</h2>
      </div>
      <Transactions transactions={transactions}/> 
      <AccountContainer />
    </div>
  );
}

export default App;
