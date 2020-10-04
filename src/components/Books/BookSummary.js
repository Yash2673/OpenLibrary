import React, { Component } from 'react';

class BookSummary extends Component{
    render(){
        const book = this.props.book;
        return(
            <div className="list">
                <div className="card">
                    <div className="card-content">
                        <div className="card-title center"><strong>{book.title}</strong></div>
                        <p>{book.summary}</p>
                        <br></br>
                        <div className="card-action grey grey-text lighten-4">
                            <p>Author : {book.author}</p>
                            <p>Country : {book.country}</p>
                            <p>Language : {book.language}</p>
                            <p>Genre	: {book.genres}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BookSummary