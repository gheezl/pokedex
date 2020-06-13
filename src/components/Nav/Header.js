import React, { Fragment } from 'react';
import "./Header.css"


const Header = () => {
    return (
        <Fragment>
            <div className="navigation" >
                <h2 className="profile" >profile</h2>
                <h2 className="welcome" >Welcome to your pokedex NAME</h2>
                <h2 className="logout" >logout</h2>
            </div>
        </Fragment>
    )
}

export default Header;