import React from "react";

export default function Search(props) {
  return (
    <div className="search">
      <form onSubmit={props.searchBook} action="">
        <input onChange={props.handleSearch} type="text" />
        <button type="submit">Search</button>
        <select defaultValue="Sort" onChange={props.handleSort}>
          <option value="Sort">Sort</option>
          <option value="Newest">Newest</option>
          <option value="Oldest">Oldest</option>
        </select>
      </form>
    </div>
  );
}
