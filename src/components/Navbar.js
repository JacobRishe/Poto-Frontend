import React from 'react'
import { Link } from 'react-router-dom'



export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark" id="siteNav">
            <a className="navbar-brand logo" href="/">PoTo</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarsExample04">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link exact to="/SignUp" className="nav-link font-weight-bolder">SignUp</Link>
                    </li>
                    <li className="nav-item">
                        <Link exact to="/LogIn</li>" className="nav-link">LogIn</Link>
                    </li>
                    <li className="nav-item">
                        <Link exact to="/Profile" className="nav-link">Profile</Link>
                    </li>
                    <li className="nav-item">
                        <Link exact to="/Home" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link exact to="/LogOut" className="nav-link">LogOut</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}