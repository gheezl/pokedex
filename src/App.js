import React, { Component, Fragment } from 'react';
import './App.css';
import Header from "./components/Nav/Header.js";
import Pokemon from "./components/pokemon/Pokemon.js";
import Input from "./components/input/Input.js"

class App extends Component {
  constructor() {
    super()
    this.state = {
      searchedPokemon: "",
      currentPokemon: "",
      currentPokemonId: "",
      currentPokemonExperience: "",
    }
  }

  getPokemon = () => {
    this.setState({ searchedPokemon: "pikachu" })
    fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.searchedPokemon}`)
      .then(response => response.json())
      .then(pokemon => this.setState({
        currentPokemon: pokemon.name,
        currentPokemonId: pokemon.order,
        currentPokemonExperience: pokemon.base_experience
      }))
    console.log(this.state.searchedPokemon)
  }

  render() {
    return (
      <Fragment>
        <Header />
        <div>
          <Input getPokemon={this.getPokemon} />
          <Pokemon
            pokemonInfo={this.state.currentPokemon}
            pokemonId={this.state.currentPokemonId}
            pokemonExperience={this.state.currentPokemonExperience}
          />
        </div>
      </Fragment>
    )
  }
}

export default App;
