import React from 'react'

function Header() {
  return (
    <div className="navbar is-info">
      <div className="navbar-brand">
        <a href="/" className="navbar-item is-size-5">Library App</a>
        <a role="button" class="navbar-burger burger">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div className="navbar-menu" id="navMenu">
        <div className="navbar-end">
          <div className="navbar-item">
            <button class="button is-info is-inverted">Add New</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
