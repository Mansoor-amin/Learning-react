import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "mansoor",
        email: "mansoor@gmail.com",
        phone: "555-555-555"
      },
      {
        id: 2,
        name: "amin",
        email: "amin@gmail.com",
        phone: "111-111-111"
      },
      {
        id: 3,
        name: "ali",
        email: "ali@gmail.com",
        phone: "222-222-222"
      },
      {
        id: 4,
        name: "yasir",
        email: "yasir@gmail.com",
        phone: "666-666-666"
      }
    ]
  };

  render() {
    const { contacts } = this.state;
    return (
      <div>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </div>
    );
  }
}

export default Contacts;
