import React, { Fragment } from 'react';



const Pokemon = ({ getPokemon }) => {
    return (
        <Fragment>
            <div>
                <h1 onClick={getPokemon} ></h1>
            </div>
        </Fragment>
    )
}

export default Pokemon;