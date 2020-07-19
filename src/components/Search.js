import React from "react";

export default function Search(props) {
  return (
    <div className="search">
      <form onSubmit={props.searchBook} action="">
        <input onChange={props.handleSearch} type="text" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
