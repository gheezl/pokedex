import React, { Component, Fragment } from 'react';
import './App.css';
import Header from "./components/Nav/Header.js"
import Pokemon from "./components/pokemon/Pokemon.js"

class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  getPokemon = () => {
    fetch("https://pokeapi.glitch.me/v1/pokemon/:slug")
      .then(response => console.log(response))
  }

  render() {
    return (
      <Fragment>
        <Header />
        <Fragment>
          <Pokemon getPokemon={this.getPokemon} />
        </Fragment>
      </Fragment>
    )
  }
}

export default App;
