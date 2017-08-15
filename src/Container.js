import React, { Component } from 'react';
import SearchBox from './SearchBox.js';
import Pokedex from './images/pokedex.png';

class Container extends Component {
  render() {
    return (
        <div className="container">
            <div className="row">
                <div className="d-flex mx-auto mt-5">
                    <SearchBox />
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="d-flex justify-content-center mt-5">
                        <img src={Pokedex} alt="Pokédex" />
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Container;
