import React from "react";

function Search({search, onChangeSearch}) {
  
  
  
  function handleChange(event) {
    onChangeSearch(event.target.value)
  }
  
  
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value={search} onChange={handleChange}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
