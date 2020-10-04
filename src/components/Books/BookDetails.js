import React, { Component } from 'react';
import logo from './Image-Not.png'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class BookDetails extends Component{
    render(){
        const {book,auth} = this.props;
        if(!auth.uid)
        {
            return <Redirect to='/login' />
        }
        else{
            if(book)
            {
                return(
                    <div className="container">
                        <div className="card">
                            <div className="card-content">
                                <div className="card-title center"><strong>{book.title}</strong></div>
                                <img src={logo} style={{float:"left",marginRight:"10px",marginTop:"5px"}} alt="No Image"/>
                                <div>
                                    {book.content}
                                </div>
                                <p className="center" ><button style={{height:"35px",border:"1px solid black"}} className="white-text green">
                                <a href={book.link} target="_blank" className="white-text">Download Link</a></button></p>
                                <br></br>
                                <div className="card-action grey grey-text lighten-4">
                                    <p>Author : {book.author}</p>
                                    <p>Country : {book.country}</p>
                                    <p>Language :	{book.language}</p>
                                    <p>Genre :	{book.genres}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            else{
                return(
                    <div className="container">
                        <h5 className="center section">Loading Book...</h5>
                    </div>
                )
            }
        }
    }
}

const mapStateToProps = (state,ownProps) => {
    //console.log(state);
    let id = ownProps.match.params.id;
    let books = state.firestore.data.books;
    let book = books ? books[id] : null;
    return{
        book : book,
        auth : state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection:'books'}
    ])
)(BookDetails)