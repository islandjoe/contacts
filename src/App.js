import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from './components/layout/Header'
import Contacts from './components/contacts/Contacts'
import AddContact from './components/contacts/AddContact'
import EditContact from './components/contacts/EditContact'
import About from './components/pages/About'
import { Provider } from './context'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import NotFound from './components/pages/NotFound'

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding='My Contacts'/>
            <div className="container">
              <Switch>
                <Route exact
                  path="/portfolio/contacts/"
                    component={ Contacts } />
                <Route exact
                  path="/portfolio/contacts/add"
                    component={ AddContact } />
                <Route exact
                  path="/portfolio/contacts/edit/:id"
                    component={ EditContact } />
                <Route exact
                  path="/portfolio/contacts/about"
                    component={ About } />
                <Route component={ NotFound } />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
