import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar bg-dark">
            <h1>
                {/* <a href="index.html"><i className="fas fa-code"></i> DevConnector</a> */}
                <Link to="/">
                    <i className="fas fa-code"></i> DevConnector
                </Link>
            </h1>
            <ul>
                <li>
                    {/* <a href="profiles.html">Developers</a> */}
                    <Link to="/#">Developers</Link>
                </li>
                <li>
                    {/* <a href="register.html">Register</a> */}
                    <Link to="/register">Register</Link>
                </li>
                <li>
                    {/* <a href="login.html">Login</a> */}
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar