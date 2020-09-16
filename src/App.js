import React, { Component } from "react";
import { v4 as uuid } from "uuid";

import Header from "./components/layout/Header";
import Library from "./components/Library";
import AddBook from "./components/AddBook";

import "./App.scss";

class App extends Component {
  state = {
    library: [
      {
        id: uuid(),
        title: "The Queen of Attolia",
        author: "Megan Whalen Turner",
        pages: 280,
        completed: true,
      },
      {
        id: uuid(),
        title: "The King of Attolia",
        author: "Megan Whalen Turner",
        pages: 397,
        completed: true,
      },
      {
        id: uuid(),
        title: "Thick As Thieves",
        author: "Megan Whalen Turner",
        pages: 352,
        completed: false,
      },
    ],
  };

  toggleRead = (id) => {
    this.setState({
      library: this.state.library.map((book) => {
        return book.id !== id ? book : { ...book, completed: !book.completed };
      }),
    });
  };

  delBook = (id) => {
    this.setState({
      library: this.state.library.filter((book) => book.id !== id),
    });
  };

  addBook = (title, author, pages, completed) => {
    const newBook = {
      id: uuid(),
      title,
      author,
      pages,
      completed,
    };
    this.setState({
      library: [...this.state.library, newBook],
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <section className="section">
          <div className="container">
            <div className="columns is-centered">
              <Library
                library={this.state.library}
                toggleRead={this.toggleRead}
                delBook={this.delBook}
              />
              <AddBook addBook={this.addBook} />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
