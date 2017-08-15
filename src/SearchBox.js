import React, { Component } from 'react';

class SearchBox extends Component {
  render() {
    return (
        <div className="input-group">
            <input type="text" id="searchPokemon" className="form-control" placeholder="What's this Pokémon?" aria-label="What's this Pokémon?" required="" autoFocus="" />
            <span className="input-group-btn">
                <button className="btn btn-primary btn-lg" type="button" aria-label="Search">Search!</button>
            </span>
        </div>
    );
  }
}

export default SearchBox;
