import React, { Fragment } from 'react';
import "./PokemonDisplay.css"


const PokemonDisplay = ({ pokemon }) => {
    return (
        <Fragment>
            <div classname="container">
                <img alt="" src={pokemon.sprites.front_default} />
                <h1>{pokemon.name}</h1>
            </div>
        </Fragment>
    )
}

export default PokemonDisplay;