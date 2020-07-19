import React from "react";

const BookCard = (props) => {
  return (
    <div className="card-container">
      <img src={props.image} alt="book cover" />
      <div className="desc"></div>
      <h2>{props.title}</h2>
      <h3>{props.author}</h3>
      <p>{props.published}</p>
    </div>
  );
};

export default BookCard;
