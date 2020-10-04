import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { signOut } from '../../store/actions/authActions'

class SignedInLinks extends Component{
    render(){
        const {profile} = this.props;
        return(
            <ul className="right">
                <li className="option"><NavLink to="/create">Create a Book</NavLink></li>
                <li className="option"><NavLink to="/request">Request a Book</NavLink></li>
                <li className="option"><a onClick={this.props.signout}>LogOut</a></li>
                <li><NavLink to="/" className="btn btn-floating yellow lighten-2 black-text"><strong>{profile.initials}</strong></NavLink></li>
            </ul>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        profile : state.firebase.profile
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        signout : () => dispatch(signOut())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignedInLinks)