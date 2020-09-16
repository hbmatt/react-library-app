import React, { Component } from "react";

import PropTypes from "prop-types";

class AddBook extends Component {
  state = {
    title: "",
    author: "",
    pages: "",
    completed: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addBook(
      this.state.title,
      this.state.author,
      this.state.pages,
      this.state.completed
    );
    this.setState({ title: "", author: "", pages: "", completed: "" });
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div className="column is-one-quarter">
        <div className="box">
          <h1 className="title">Add Book</h1>
          <form onSubmit={this.onSubmit}>
            <div className="field">
              <label htmlFor="title" className="label">
                Title
              </label>
              <div className="control">
                <input
                  type="text"
                  name="title"
                  className="input"
                  value={this.state.title}
                  onChange={this.onChange}
                />
              </div>
            </div>
            <div className="field">
              <label htmlFor="author" className="label">
                Author
              </label>
              <div className="control">
                <input
                  type="text"
                  name="author"
                  className="input"
                  value={this.state.author}
                  onChange={this.onChange}
                />
              </div>
            </div>
            <div className="field">
              <label htmlFor="pages" className="label">
                Pages
              </label>
              <div className="control">
                <input
                  type="number"
                  name="pages"
                  className="input"
                  value={this.state.pages}
                  onChange={this.onChange}
                />
              </div>
            </div>
            <div className="field">
              <label htmlFor="completed" className="label">
                Status
              </label>
              <div className="select">
                <select name="completed" value={this.state.completed} onChange={this.onChange}>
                  <option value="false">To Read</option>
                  <option value="true">Read</option>
                </select>
              </div>
            </div>
            <div className="field">
              <div className="control">
                <button className="button is-info">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

// PropTypes
AddBook.propTypes = {
  addBook: PropTypes.func.isRequired,
};

export default AddBook;
