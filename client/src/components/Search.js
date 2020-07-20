import React from "react";

export default function Search(props) {
  return (
    <div className="search">
      <form onSubmit={props.searchBook}>
        <input
          className="search-box-input"
          onChange={props.handleSearch}
          type="text"
        />
        <button className="search-box-button" type="submit">
          Search
        </button>
        <select defaultValue="Sort" onChange={props.handleSort}>
          <option value="Sort">Sort</option>
          <option value="Newest">Newest</option>
          <option value="Oldest">Oldest</option>
        </select>
      </form>
    </div>
  );
}
