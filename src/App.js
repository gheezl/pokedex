import React, { Component, Fragment } from 'react';
import './App.css';
import Header from "./components/Nav/Header.js";
import Pokemon from "./components/pokemon/Pokemon.js";

class App extends Component {
  constructor() {
    super()
    this.state = {
      searchedPokemon: "",
      currentPokemon: "",
      currentPokemonId: "",
      currentPokemonExperience: "",
      currentPokemonSprite: "",
    }
  }

  onSearchChange = (event) => {
    this.setState({ searchedPokemon: event.target.value.toLowerCase() })
  }

  getPokemon = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.searchedPokemon}`)
      .then(response => response.json())
      .then(pokemon => this.setState({
        currentPokemonSprite: pokemon.sprites.front_default,
        currentPokemon: pokemon.name,
        currentPokemonId: pokemon.order,
        currentPokemonExperience: pokemon.base_experience
      }))
  }

  getPokemon2 = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.searchedPokemon}`)
      .then(response => response.json())
      .then(pokemon => console.log(pokemon))
  }

  render() {
    return (
      <Fragment>
        <Header
          onSearchChange={this.onSearchChange}
          getPokemon={this.getPokemon}
        // getPokemon2={this.getPokemon2}

        />
        <div>
          <Pokemon
            pokemonSprite={this.state.currentPokemonSprite}
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
