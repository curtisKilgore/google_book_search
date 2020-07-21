import React from "react";

const BookCard = (props) => {
  return (
    <div className="card-container">
      <img src={props.image} alt="book cover" />
      <div className="desc"></div>
      <h2>{props.title}</h2>
      <h3>Author: {props.author}</h3>
      <p>Published Date: {props.published}</p>
      <button
        onClick={() =>
          props.handleSave({
            published: props.published,
            image: props.image,
            title: props.title,
            author: props.author.join(", "),
          })
        }
      >
        Save Book
      </button>
    </div>
  );
};

export default BookCard;
