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
      currentPokemonId: "",
      currentPokemonExperience: "",
    }
  }

  componentDidMount = () => {
    fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
      .then(response => response.json())
      .then(pokemon => this.setState({
        currentPokemon: pokemon.name,
        currentPokemonId: pokemon.order,
        currentPokemonExperience: pokemon.base_experience
      }))
    console.log(this.state.currentPokemon)
    console.log(this.state.currentPokemonId)
  }

  getPokemon = () => {
    fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
      .then(response => response.json())
      .then(pokemon => console.log(pokemon))
    console.log(this.state.currentPokemonExperience)
  }

  render() {
    return (
      <Fragment>
        <Header />
        <div>
          <Pokemon
            getPokemon={this.getPokemon}
            pokemonInfo={this.state.currentPokemon}
            pokemonId={this.state.currentPokemonId}
            pokemonExperience={this.state.currentPokemonExperience}
          />
          <Pokemon getPokemon={this.getPokemon} />
        </div>
      </Fragment>
    )
  }
}

export default App;
