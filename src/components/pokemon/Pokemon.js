import React, { Fragment } from 'react';
import "./Pokemon.css"


const Pokemon = ({ getPokemon2, getPokemon, pokemon, onRouteChange }) => {
    return (
        <Fragment>
            <div onClick={() => onRouteChange("Display")} className="card">
                <h2 className="name"> {pokemon.name} #{pokemon.order} </h2>
                <h3 className="species"> Base Experience: {pokemon.base_experience} </h3>
            </div>
        </Fragment>
    )
}

export default Pokemon;