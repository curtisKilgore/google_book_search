import React, { Component } from "react";
import axios from "axios";
import BookCard from "../components/BookCard";

export default class SavedBooks extends Component {
  state = {
    savedBooks: null,
  };

  componentDidMount() {
    axios.get("/api/books").then((data) => {
      console.log(data);
      this.setState({
        savedBooks: data.data,
      });
    });
  }

  render() {
    return (
      <div>
        {this.state.savedBooks
          ? this.state.savedBooks.map((book) => {
              return (
                <BookCard
                  image={book.image}
                  author={book.author}
                  title={book.title}
                  published={book.published}
                />
              );
            })
          : "N/A"}
      </div>
    );
  }
}
