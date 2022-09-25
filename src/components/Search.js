import React from "react";
import {useState} from "react"

function Search(onSearch) {
  const [search,setSearch]=useState("")
  function handleChange(e){
    setSearch(e.target.value)
    onSearch(search)
  }
  return (
    <div className="ui large fluid icon input">
      <input
        value={search}
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={() => console.log("Searching...")}
      />
      <i className="circular search link icon"></i>
      <button></button>
    </div>
  );
}

export default Search;
