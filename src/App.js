import React, { Component } from 'react';

import ListContacts from './ListContacts';
import IngredientList from './IngredientList';
import CreateContact from './CreateContact';
import * as ContactAPI from './utils/ContactsAPI';
import logo from './logo.svg';
import './App.css';

const ingredient = {"items":[{"id":"a"},{"id":"b"},{"id":"c"}]};

class App extends Component {
  state = {
    screen: 'create',
    contacts: []
  }

  componentDidMount() {
    ContactAPI.getAll().then((contacts) => {
      this.setState({contacts})
    })
  }

  removeContact = (contact) => {
    this.setState((state) => ({
      contacts: state.contacts.filter((c) => c.id !== contact.id)
    }))
  }

  render() {
    return (
      <div className="App">
        {this.state.screen === 'list' && (
          <ListContacts
            contacts={this.state.contacts}
            onDeleteContact={this.removeContact}
            onNavigate={() => {
              this.setState({ screen: 'create'})
            }}
          />
        )}

        {this.state.screen === 'create' && (<CreateContact />)}
        <IngredientList items={ingredient.items} />
      </div>
    );
  }
}

export default App;