import React, { Component } from 'react';
import moment from 'moment' 

class BooksRequested extends Component{
    render(){
        const request = this.props.request;
        return(
            <div >
                <div className="card blue lighten-5" >
                    <div className="card-content">
                        <h5 className="card-title center brown-text"><strong>Books Requested</strong></h5>
                        <ol>
                            {request && request.map(book => {
                                return(
                                    <li key={book.id}> <strong>{book.book}</strong> - <span className="pink-text">{book.author}</span> requested by<br></br>
                                    <span className="purple-text">{book.firstName} {book.lastName}</span><div className="grey-text">
                                        {moment(book.timestamp.toString()).calendar()}
                                    </div></li>
                                )
                            })}
                        </ol>
                    </div>
                </div>
            </div>
        )
    }
}

export default (BooksRequested)