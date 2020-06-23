import React, { Fragment } from 'react';
import "./Header.css"


const Header = ({ onSearchChange, getPokemon, getPokemon2 }) => {
    return (
        <Fragment>
            <div className="navigation" >
                <h2 className="welcome" >pokedex</h2>
                <input className="input" onChange={onSearchChange} type="text" placeholder="Search Pokemon" />
                <button className="button" onClick={getPokemon2} placeholder="">🔎</button>
                <h2 className="profile" >profile</h2>
            </div>
        </Fragment>
    )
}

export default Header;