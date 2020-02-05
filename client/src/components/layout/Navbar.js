import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { logout } from '../../actions/auth'

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {

    const authLinks = (
        <ul>
            <li>
                <Link to="/profiles">
                    Developers
                </Link>
            </li>
            <li>
                <Link to="/posts">
                    Posts
                </Link>
            </li>
            <li>
                <Link to="/dashboard">
                    <i className="fas fa-user"></i>{' '}
                    <span className="hide-sm">Dashboard</span>
                </Link>
            </li>            
            <li>
                {/* <a href="profiles.html">Developers</a> */}
                {/* <Link to="#!">Developers</Link> */}
                <a onClick={logout} href="#!">
                    <i className="fas fa-sign-out-alt"></i>{' '}
                    <span className="hide-sm">Logout</span>
                </a>
            </li>
        </ul>
    );

    const guestLinks = (
        <ul>
            <li>
                <Link to="/profiles">
                    Developers
                </Link>
            </li>            
            {/* <li>
                <a href="profiles.html">Developers</a>
                <Link to="#!">Developers</Link>
            </li>
            */}
            <li>
                {/* <a href="register.html">Register</a> */}
                <Link to="/register">Register</Link>
            </li>
            <li>
                {/* <a href="login.html">Login</a> */}
                <Link to="/login">Login</Link>
            </li>
        </ul>
    )

    return (
        <nav className="navbar bg-dark">
            <h1>
                {/* <a href="index.html"><i className="fas fa-code"></i> DevConnector</a> */}
                <Link to="/">
                    <i className="fas fa-code"></i> DevConnector
                </Link>
            </h1>
            {/* { !loading ? '' : null } */ }
            { !loading && (
                <Fragment>
                    { isAuthenticated ? authLinks : guestLinks }
                </Fragment>
            )}
        </nav>
    )
}

Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(
    mapStateToProps,
    { logout }
)(Navbar)