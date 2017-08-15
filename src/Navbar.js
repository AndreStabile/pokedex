import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
        <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
            <a className="navbar-brand title" href="localhost:3000">Pokédex</a>
        </nav>
    );
  }
}

export default Navbar;
