import React from 'react';
import {Link} from 'react-router-dom';

export default function Nav() {
    return (
        <div className="navbar">
            <Link to="/favorite">Favorites</Link>
            <br></br>
            <Link to="/search">Search</Link>
            <br />
            <Link to="/">Home</Link>
        </div>
    )
}