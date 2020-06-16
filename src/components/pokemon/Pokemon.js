import React, { Fragment } from 'react';
import "./Pokemon.css"


const Pokemon = ({ getPokemon }) => {
    return (
        <Fragment>
            <div onClick={getPokemon} className="card">
                <h2 className="name">Pikachu #321</h2>
                <h3 className="species">species</h3>
            </div>
        </Fragment>
    )
}

export default Pokemon;