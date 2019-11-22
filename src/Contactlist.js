import React, { Component } from 'react';
import escapeRegexp from 'escape-string-regexp';
import sortBy from 'sort-by';
import PropTypes from 'prop-types';


class ContactList extends Component {
    state = {
        query: ''
    }

    handleDelete(contact) {
        this.props.onDeleteContact(contact);
    }
    updateContact(userInput) {
        this.setState({
            query: userInput.trim()
        });
    }
    render() {
        let showingContacts;
        //If the user searches,
        if (this.state.query) {
            //filter | changeState
            const match = new RegExp(escapeRegexp(this.state.query, 'i'));//escapes spl chars to the regexp context
            //match.test('Arun') 
            showingContacts = this.props.contacts.filter((contact) => {
                return match.test(contact.name)
            })

        } else {
            showingContacts = this.props.contacts;
        }
        //Sorting
        showingContacts.sort(sortBy('name'));

        return (
            <div>
                <div className="form-group">
                    <input type="text"
                        name="search"
                        className="form-control border-secondary"
                        placeholder="Search Contacts"
                        autoComplete="off"
                        value={this.state.query}
                        onChange={(event) => this.updateContact(event.target.value)} />
                </div>
                {showingContacts.map((contact, index) => (
                    <div className="card border-secondary mb-3" key={index}>
                        <h4 className="card-header border-secondary bg-transparent">{contact.name}</h4>
                        <div className="card-body">
                            <div className="card-title">{contact.email}</div>
                            <div className="card-title">{contact.phone}</div>

                        </div>
                        <div className="card-footer border-secondary bg-transparent ">
                            <button className="btn btn-sm btn-danger"
                                onClick={() => this.handleDelete(contact)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}
//Component's TypeChecking
ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired
}
export default ContactList;