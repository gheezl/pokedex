import React, { Fragment } from 'react';
import "./Pokemon.css"


const Pokemon = ({ getPokemon2, getPokemon, pokemonInfo, pokemonId, pokemonExperience, pokemonSprite }) => {
    return (
        <Fragment>
            <div onClick={getPokemon} className="card">
                <div className="sprite">
                    <img className="image" alt="" src={pokemonSprite} />
                </div>
                <h2 className="name"> {pokemonInfo} #{pokemonId} </h2>
                <h3 className="species"> Base Experience: {pokemonExperience} </h3>
            </div>
        </Fragment>
    )
}

export default Pokemon;