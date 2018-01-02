import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ListContacts from './ListContacts';
import IngredientList from './IngredientList';
import CreateContact from './CreateContact';
import * as ContactsAPI from './utils/ContactsAPI';
import logo from './logo.svg';
import './App.css';

const ingredient = {"items":[{"id":"a"},{"id":"b"},{"id":"c"}]};

class App extends Component {
  state = {
    screen: 'list',
    contacts: []
  }

  componentDidMount() {
    ContactsAPI.getAll().then((contacts) => {
      this.setState({contacts})
    })
  }

  removeContact = (contact) => {
    this.setState((state) => ({
      contacts: state.contacts.filter((c) => c.id !== contact.id)
    }))

    ContactsAPI.remove(contact)
  }

  createContact = (contact) => {
    ContactsAPI.create(contact).then(contact => {
      this.setState(state => {
        contacts: state.contacts.concat([contact])
      })
    })
  }

  render() {
    return (
      <div className="App">
        <Route exact path='/' render={() => (
          <ListContacts
            contacts={this.state.contacts}
            onDeleteContact={this.removeContact}
          />
        )} />
        <Route path='/create' render={({history}) => (
          <CreateContact
            onCreateContact={(contact) => {
              this.createContact(contact)
              history.push('/')
            }} />

        )} />
                
      </div>
    );
  }
}

export default App;