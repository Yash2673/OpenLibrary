import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { login } from '../../store/actions/authActions'

class Login extends Component {
    state = {
        email : '',
        password : ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    handleSubmit =(e) => {
        e.preventDefault();
        this.props.login(this.state);
        this.setState({
            email : '',
            password : ''
        })
    }

    render() {
        const {auth,authError} = this.props;
        if(auth.uid)
        {
            return <Redirect to='/' />
        }
        else{
            return (
                <div className="container">
                    <h5 className="center section"><strong>Sign-In</strong></h5>
                    <form className="white" onSubmit={this.handleSubmit}>
                        <div className="input-field">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" required onChange={this.handleChange} value={this.state.email}/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="password" >Password</label>
                            <input type="password" id="password" required value={this.state.password} onChange={this.handleChange}/>
                        </div>
                        <div className="input-field">
                            <button className="pink btn z-depth-0">Submit</button>
                        </div>
                        <div className="center red-text">
                            {authError ? <p>{authError}</p> : null}
                        </div>
                    </form>    
                    <div className="note">
                        <p><strong>Note :</strong> Use the following id and password to login, due to the <span className="red-text"> malfunctioning</span> of Sign-Up page</p>
                    </div>
                    <div className="note1">
                        <p><strong>Id -</strong> <span className="blue-text">test@gmail.com</span></p>
                        <p><strong>Password -</strong> <span className="green-text">123456789</span></p>
                    </div>
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return{
        authError : state.auth.authError,
        auth : state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        login : (credentials) => dispatch(login(credentials))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)
