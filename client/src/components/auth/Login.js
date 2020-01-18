import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    const [formData, setFormData] = useState(
        {
            email: '',
            password: ''
        }
    );

    const { name, email, password, password2 } = formData;

    const onChange = e => setFormData({
        ...formData, // crea una copia
        [e.target.name]: e.target.value
    });

    const onSubmit = async e => {
        e.preventDefault();
        console.log('SUCCESS');
    }

    return (
        <Fragment>
            <h1 className="large text-primary">Sign Up</h1>
            <p className="lead"><i className="fas fa-user"></i> Sign into your Account</p>
            <form className="form" onSubmit={e => onSubmit(e)} action="create-profile.html">
            <div className="form-group">
                <input 
                    type="email" 
                    placeholder="Email Address" 
                    name="email"
                    value={email}
                    onChange={e => onChange(e)}
                    required />
                <small className="form-text"
                >This site uses Gravatar so if you want a profile image, use a
                Gravatar email</small
                >
            </div>
            <div className="form-group">
                <input
                type="password"
                placeholder="Password"
                name="password"
                minLength="6"
                value={password}
                onChange={e => onChange(e)}
                />
            </div>
            <input type="submit" className="btn btn-primary" value="Login" />
            </form>
            <p className="my-1">
            Don't have an account? 
            {/* <a href="login.html">Login</a> */}
            <Link to="/register">Sign Up</Link>
            </p>
        </Fragment>
    )
}

export default Login