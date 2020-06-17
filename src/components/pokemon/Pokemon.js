import React, { Fragment } from 'react';
import "./Pokemon.css"


const Pokemon = ({ getPokemon, pokemonInfo, pokemonId }) => {
    return (
        <Fragment>
            <div onClick={getPokemon} className="card">
                <h2 className="name"> {pokemonInfo} #{pokemonId} </h2>
                <h3 className="species"> </h3>
            </div>
        </Fragment>
    )
}

export default Pokemon;