import React, { Fragment } from 'react';
import "./Pokemon.css"


const Pokemon = ({ getPokemon2, getPokemon, pokemon }) => {
    return (
        <Fragment>
            <div onClick={getPokemon} className="card">

                <div className="sprite">
                    <img className="image" alt="" src={pokemon} />
                </div>
                <h2 className="name"> {pokemon.name} #{pokemon.order} </h2>
                <h3 className="species"> Base Experience: {pokemon.base_experience} </h3>
            </div>
        </Fragment>
    )
}

export default Pokemon;