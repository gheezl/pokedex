import React, { Component, Fragment } from 'react';
import './App.css';
import Header from "./components/Nav/Header.js";
import Pokemon from "./components/pokemon/Pokemon.js";

class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  getPokemon = () => {
    fetch("https://pokeapi.glitch.me/v1/pokemon/:pikachu")
      .then(response => console.log(response))
  }

  render() {
    return (
      <Fragment>
        <Header />
        <div>
          <Pokemon getPokemon={this.getPokemon} />
          <Pokemon getPokemon={this.getPokemon} />
        </div>
      </Fragment>
    )
  }
}

export default App;
