import React from "react";

function Search({setSearch}) {
  const handleChange = (event) => {
    setSearch(event.target.value)
  }
  
  
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={handleChange}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
