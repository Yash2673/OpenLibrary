import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';
import BookDetails from './components/Books/BookDetails';
import CreateBook from './components/Books/CreateBook';
import RequestBook from './components/Books/RequestBook';
import Dashboard from './components/dashboard/Dashboard';
import Navbar from './components/layout/Navbar';

class App extends Component{
  render(){
    return(
      <BrowserRouter>
        <div className="App">
            <Navbar />
            <Switch>
              <Route path="/book/:id" component={BookDetails} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={SignUp} />
              <Route path="/request" component={RequestBook} />
              <Route path="/create" component={CreateBook} />
              <Route path="/" component={Dashboard} />
            </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
