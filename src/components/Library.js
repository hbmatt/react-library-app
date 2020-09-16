import React, { Component } from "react";
import Book from "./Book";

import PropTypes from 'prop-types';

class Library extends Component {
  render() {
    return (
      <div className="column is-three-quarters">
        <h1 className="title">Library</h1>
        <table className="table is-fullwidth">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Pages</th>
              <th>Status</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.library.map((book) => (
            <Book
              key={book.id}
              book={book}
              toggleRead={this.props.toggleRead}
              delBook={this.props.delBook}
            />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

// PropTypes
Library.propTypes = {
  library: PropTypes.array.isRequired,
  toggleRead: PropTypes.func.isRequired,
  delBook: PropTypes.func.isRequired
}

export default Library;
