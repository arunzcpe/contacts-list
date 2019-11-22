import React, { Component } from 'react';
import Header from './Header';
import ContactList from './Contactlist';



class App extends Component {
  //Default State
  state = {
    contacts: [
      {
        name: 'Debra Pauh',
        email: 'debra@gmail.com',
        phone: 1234567890
      },
      {
        name: 'Ismail Sulaiman',
        email: 'ismail@gmail.com',
        phone: 1234567890
      },
      {
        name: 'Ahmed Zulhimi',
        email: 'ahmed@gmail.com',
        phone: 1234567890
      },
      {
        name: 'Kesava Kumar Raman',
        email: 'kesava@gmail.com',
        phone: 1234567890
      },
      {
        name: 'Aina Azmi',
        email: 'aina@gmail.com',
        phone: 1234567890
      },
      {
        name: 'Arun Arichandran',
        email: 'arun@gmail.com',
        phone: 1234567890
      },
      {
        name: 'Saran Arichandran',
        email: 'sarav@gmail.com',
        phone: 1234567890
      },
      {
        name: "O'relly",
        email: 'ahmed@gmail.com',
        phone: 1234567890
      },
    ]
  }

  removeContact = (contact) => {
    this.setState((state) => ({
      contacts: state.contacts.filter(c => c.name !== contact.name)
    }));
  }

  render() {
    const { contacts } = this.state;
    return (
      <div>
        <Header siteName="ListContacts" />
        <div className="container mt-3">
          <ContactList contacts={contacts} onDeleteContact={this.removeContact} />
        </div>
      </div>
    );
  }
}

export default App;