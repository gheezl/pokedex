import React, { Component, Fragment } from 'react';
import './App.css';
import Header from "./components/Nav/Header.js";
import Pokemon from "./components/pokemon/Pokemon.js";
import axious from "axios";

class App extends Component {
  constructor() {
    super()
    this.state = {
      currentPokemon: "",
      currentPokemonID: "",
    }
  }

  componentDidMount = () => {
    fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
      .then(response => response.json())
      .then(pokemon => this.setState({ currentPokemon: pokemon.name, currentPokemonID: pokemon.order }))
    console.log(this.state.currentPokemon)
    console.log(this.state.currentPokemonID)
  }

  getPokemon = () => {
    fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
      .then(response => response.json())
      .then(pokemon => console.log(pokemon))
    console.log(this.state.currentPokemonID)
  }

  render() {
    return (
      <Fragment>
        <Header />
        <div>
          <Pokemon getPokemon={this.getPokemon} pokemonInfo={this.state.currentPokemon} pokemonId={this.state.currentPokemonID} />
          <Pokemon getPokemon={this.getPokemon} />
        </div>
      </Fragment>
    )
  }
}

export default App;
