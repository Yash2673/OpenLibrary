import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { request } from '../../store/actions/bookActions';

class RequestBook extends Component{
    state = {
        book : '',
        author : ''
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {profile} = this.props;
        this.props.request(this.state,profile);
        this.props.history.push('/');
    }

    handleChange =(e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    render(){
        const {auth} = this.props;
        if(!auth.uid)
        {
            return <Redirect to="/login" />
        }
        return(
            <div className="container">
            <h5 className="center section"><strong>Book Request</strong></h5>
                <form className="white" onSubmit={this.handleSubmit}>
                    <div className="input-field">
                        <label htmlFor="book">Book</label>
                        <input type="text" id="book" onChange={this.handleChange} required value={this.state.book}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="author">Author</label>
                        <input type="text" id="author" onChange={this.handleChange} required value={this.state.author}/>
                    </div>
                    <button className="btn pink">Submit</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        profile : state.firebase.profile,
        auth : state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        request : (book,profile) => {dispatch(request(book,profile))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (RequestBook)