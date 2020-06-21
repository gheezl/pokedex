import React, { Fragment } from 'react';
import "./Input.css"



const Input = ({ getPokemon, onSearchChange }) => {
    return (
        <Fragment>
            <div className="searchBar" >
                <div className="search">
                    <input onChange={onSearchChange} type="text" placeholder="Search Pokemon" />
                    <button onClick={getPokemon} placeholder="">🔎</button>
                </div>
            </div>
        </Fragment>
    )
}

export default Input;