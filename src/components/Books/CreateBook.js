import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { create } from '../../store/actions/bookActions'

class CreateBook extends Component{
    state={
        title : '',
        summary:'',
        content : '',
        author : '',
        genres : '',
        country : '',
        language :'',
        download:''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    handleSubmit =(e) =>{
        e.preventDefault();
        this.props.create(this.state);
        this.setState({
            title : '',
            summary:'',
            content : '',
            author : '',
            genres : '',
            country : '',
            language :'',
            download:''
        })
        this.props.history.push("/");
    }
    render(){
        const {auth} = this.props;
        if(!auth.uid)
        {
            return <Redirect to="/login" />
        }
        return(
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                <h5 className="center section">Create a Book</h5>
                    <div className="input-field">
                        <label htmlFor="title">Name</label>
                        <input type="text" id="title" onChange={this.handleChange} required value={this.state.title}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="summary">Summary</label>
                        <input type="text" id="summary" onChange={this.handleChange} required value={this.state.summary}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Content</label>
                        <textarea id="content" onChange={this.handleChange} required value={this.state.content}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="author">Author</label>
                        <input type="text" id="author" onChange={this.handleChange} required value={this.state.author}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="country">Country</label>
                        <input type="text" id="country" onChange={this.handleChange} required value={this.state.country}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="language">Language</label>
                        <input type="text" id="language" onChange={this.handleChange} required value={this.state.language}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="genres">Genres</label>
                        <input type="text" id="genres" onChange={this.handleChange} required value={this.state.genres}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="download">Download Link</label>
                        <input type="text" id="download" onChange={this.handleChange} required value={this.state.download}/>
                    </div>
                    <button className="btn pink">Submit</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        auth : state.firebase.auth
    }
}

const mapDispatchToProps =(dispatch) => {
    return{
        create : (book) => {dispatch(create(book))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CreateBook)