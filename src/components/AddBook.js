import React, { Component } from "react";

import PropTypes from "prop-types";

class AddBook extends Component {
  state = {
    title: "",
    author: "",
    pages: "",
    completed: "",
    errors: {
      title: "",
      author: "",
      pages: "",
    },
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

  onChange = (e) => {
    const { name, value } = e.target;
    let errors = this.state.errors;

    if (value.length < 1) {
      errors[name] = `Please enter a value for ${name}.`;
    } else {
      errors[name] = "";
    }

    this.setState({ errors, [name]: value });
  };

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
                  className={
                    "input" + (this.state.errors.title ? " is-danger" : "")
                  }
                  value={this.state.title}
                  onChange={this.onChange}
                />
              </div>
              <p class="help is-danger">{this.state.errors.title}</p>
            </div>
            <div className="field">
              <label htmlFor="author" className="label">
                Author
              </label>
              <div className="control">
                <input
                  type="text"
                  name="author"
                  className={
                    "input" + (this.state.errors.author ? " is-danger" : "")
                  }
                  value={this.state.author}
                  onChange={this.onChange}
                />
              </div>
              <p class="help is-danger">{this.state.errors.author}</p>
            </div>
            <div className="field">
              <label htmlFor="pages" className="label">
                Pages
              </label>
              <div className="control">
                <input
                  type="number"
                  name="pages"
                  className={
                    "input" + (this.state.errors.pages ? " is-danger" : "")
                  }
                  value={this.state.pages}
                  onChange={this.onChange}
                />
              </div>
              <p class="help is-danger">{this.state.errors.pages}</p>
            </div>
            <div className="field">
              <label htmlFor="completed" className="label">
                Status
              </label>
              <div className="select">
                <select
                  name="completed"
                  value={this.state.completed}
                  onChange={this.onChange}
                >
                  <option value="false">To Read</option>
                  <option value="true">Read</option>
                </select>
              </div>
            </div>
            <div className="field">
              <div className="control">
                <input
                  type="submit"
                  value="Submit"
                  className="button is-info"
                  disabled={
                    this.state.title && this.state.author && this.state.pages
                      ? false
                      : true
                  }
                />
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
