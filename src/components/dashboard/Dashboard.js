import React, { Component } from 'react'
import BookList from '../Books/BookList'
import BooksRequested from './BooksRequested'
import {connect} from 'react-redux'
import { compose } from 'redux'
import {firestoreConnect} from 'react-redux-firebase'
import { Redirect } from 'react-router-dom'
import Notifications from './Notifications'
import Counter from './Counter'

class Dashboard extends Component{
    render(){   
        const {auth} =this.props;
        
        if(!auth.uid)
        {
            return <Redirect to='/login' />
        }
        else
        {
            return(
                <div className="dashboard container">
                    <div className="row">
                        <div className="col s12 m6">
                            <h4 className="text-darken-3 center head">Books</h4>
                            <BookList booklist={this.props.booklist}/>
                        </div>
                        <div className="col s12 m5 offset-m1">
                            <BooksRequested request={this.props.request}/>
                            <Notifications notifications={this.props.notifications}/>
                            <Counter counter = {this.props.counter} />

                        </div>
                    </div>
                </div>
            )
        }   
    }
}

const mapStateToProps = (state) => {
    //console.log(state);
    return{
        booklist : state.firestore.ordered.books,
        auth : state.firebase.auth,
        request : state.firestore.ordered.request,
        notifications : state.firestore.ordered.notifications,
        counter : state.firestore.ordered.counter
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection : 'books', orderBy: ['timestamp','desc']},
        {collection : 'request', limit :5, orderBy:['timestamp','desc']},
        {collection : 'notifications' , limit :5, orderBy : ['time','desc']},
        {collection : 'counter'}
    ]))
(Dashboard)