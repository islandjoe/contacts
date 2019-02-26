import React, { Component } from 'react';
import Header from './components/layout/Header'
import Contacts from './components/contacts/Contacts'
import AddContacts from './components/contacts/AddContact'
import { Provider } from './context'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import AddContact from './components/contacts/AddContact'

class App extends Component {
  render() {
    return (
      <Provider>
      <div className="App">
        <Header branding='My Contacts'/>
        <div className="container">
          <AddContact />
          <Contacts />
        </div>
      </div>
      </Provider>
    );
  }
}

export default App;
