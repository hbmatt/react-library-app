import React, { Component } from "react";

import PropTypes from "prop-types";

class Book extends Component {
  render() {
    const { id, title, author, pages, completed } = this.props.book;
    return (
      <tr>
        <td>{title}</td>
        <td>{author}</td>
        <td>{pages}</td>
        <td>{completed ? "Read" : "To Read"}</td>
        <td className="has-text-centered">
          <button
            className="button is-danger is-small"
            onClick={this.props.delBook.bind(this, id)}
          >
            Delete
          </button>
        </td>
        <td className="has-text-centered">
          <button
            className="button is-warning is-small"
            onClick={this.props.toggleRead.bind(this, id)}
          >
            {completed ? "To Read" : "Read"}
          </button>
        </td>
      </tr>
    );
  }
}

// PropTypes
Book.propTypes = {
  book: PropTypes.object.isRequired,
  toggleRead: PropTypes.func.isRequired,
  delBook: PropTypes.func.isRequired,
};

export default Book;
