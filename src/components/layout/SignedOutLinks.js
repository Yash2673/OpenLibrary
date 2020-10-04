import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class SignedOutLinks extends Component{
    render(){
        return(
            <ul className="right">
                <li><NavLink to="/login">Login</NavLink></li>
                <li className="option"><NavLink to="/">Sign Up</NavLink></li>
            </ul>
        )
    }
}

export default SignedOutLinks