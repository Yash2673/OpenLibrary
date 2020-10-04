import React, { Component } from 'react';
import BookSummary from './BookSummary';
import {Link} from 'react-router-dom';

class BookList extends Component{
    render(){
        const booklist = this.props.booklist;
        return(
            <div>
                {booklist && booklist.map(book => {
                    return(
                        <Link to={"book/" + book.id} key={book.id} style={{ color: 'black' }}><BookSummary book={book}/></Link>
                    )
                })} 
            </div>
        )
    }
}

export default BookList