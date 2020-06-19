import React, { Fragment } from 'react';
import "./Header.css"


const Header = ({ onSearchChange, getPokemon, getPokemon2 }) => {
    return (
        <Fragment>
            <div className="navigation" >
                <h2 className="welcome" >pokedex</h2>

                <div className="search">
                    <input onChange={onSearchChange} className="searchBar" type="text" placeholder="Search Pokemon" />
                    <button onClick={getPokemon} className="button" >GO!</button>
                </div>

                <h2 className="profile" >profile</h2>
            </div>
        </Fragment>
    )
}

export default Header;