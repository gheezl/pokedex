import React, { Fragment } from 'react';
import "./PokemonDisplay.css"
import Pokemon from '../pokemon/Pokemon';


const PokemonDisplay = ({ pokemon }) => {
    return (
        <Fragment>
            <div>
                <h1 className="name" >{pokemon.name}</h1>
            </div>
        </Fragment>
    )
}

export default PokemonDisplay;