import React, { Component } from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="main-menu">
            <ul>
                <li><Link to="/"><span className="fa fa-star"></span> Popular</Link></li>
                <li><Link to="/watchlist"><span className="fa fa-eye"></span> Watchlist</Link></li>
                <li><Link to="/search"><span className="fa fa-search"></span> Search</Link></li>
            </ul>
        </div>
    );
}

export default Navbar;
