import React, { Component, Fragment } from 'react';
import './App.css';
import Header from "./components/Nav/Header.js";
import Pokemon from "./components/pokemon/Pokemon.js";
import PlaceHolder from "./components/placeHolder/PlaceHolder.js"


class App extends Component {
  constructor() {
    super()
    this.state = {
      searchedPokemon: "",
      pokemon: "",
      route: "",
    }
  }

  onRouteChange = () => {

  }

  onSearchChange = (event) => {
    this.setState({ searchedPokemon: event.target.value.toLowerCase() })
  }

  getPokemon = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.searchedPokemon}`)
      .then(response => response.json())
      .then(pokemon => this.setState({
        pokemon: pokemon
      }))
      .catch(err => {
        console.log(err)
      })
    this.setState({ route: "pokemon" })
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
          getPokemon2={this.getPokemon2}

        />
        <div>
          {this.state.route === "pokemon"
            ? <Pokemon
              pokemon={this.state.pokemon}
              pokemonExperience={this.state.currentPokemonExperience}
            />
            : <PlaceHolder />
          }
        </div>
      </Fragment >
    )
  }
}

export default App;
