import React, { Component } from "react";
import "./App.css";

import Header from "./Header";
import MainContent from "./MainContent";

class App extends Component {
  state = {
    isFiltered: false,
    pendingGuest: "",
    guests: []
  };

  lastUniqueId = 0;

  nextUniqueId = () => {
    let nextId = this.lastUniqueId + 1;
    this.lastUniqueId++;
    return nextId;
  };

  toggleGuestPropertyAt = (property, id) =>
    this.setState({
      guests: this.state.guests.map(guest => {
        if (id === guest.id) {
          return {
            ...guest,
            [property]: !guest[property]
          };
        }
        return guest;
      })
    });

  toggleConfirmationAt = id => this.toggleGuestPropertyAt("isConfirmed", id);

  removeGuestAt = id =>
    this.setState({
      guests: this.state.guests.filter(guest => id !== guest.id)
    });

  toggleEditingAt = id => this.toggleGuestPropertyAt("isEditing", id);

  setNameAt = (name, idOfChange) =>
    this.setState({
      guests: this.state.guests.map((guest, id) => {
        if (id === idOfChange) {
          return {
            ...guest,
            name
          };
        }
        return guest;
      })
    });

  toggleFilter = () => this.setState({ isFiltered: !this.state.isFiltered });

  handleNameInput = e =>
    this.setState({
      pendingGuest: e.target.value
    });

  addInvitedGuest = e => {
    e.preventDefault();
    let id = this.nextUniqueId();
    this.setState({
      guests: [
        {
          id,
          name: this.state.pendingGuest,
          isConfirmed: false,
          isEditing: false
        },
        ...this.state.guests
      ],
      pendingGuest: ""
    });
  };
  getTotalInvited = () => this.state.guests.length;
  getAttendingGuests = () =>
    this.state.guests.reduce(
      (total, guest) => (guest.isConfirmed ? total + 1 : total),
      0
    );

  render() {
    const totalInvited = this.getTotalInvited();
    const numberAttending = this.getAttendingGuests();
    const numberUnconfirmed = totalInvited - numberAttending;
    return (
      <div className="App">
        <Header
          addInvitedGuest={this.addInvitedGuest}
          pendingGuest={this.state.pendingGuest}
          handleNameInput={this.handleNameInput}
        />
        <MainContent
          toggleFilter={this.toggleFilter}
          isFiltered={this.state.isFiltered}
          totalInvited={totalInvited}
          numberAttending={numberAttending}
          numberUnconfirmed={numberUnconfirmed}
          guests={this.state.guests}
          toggleConfirmationAt={this.toggleConfirmationAt}
          toggleEditingAt={this.toggleEditingAt}
          setNameAt={this.setNameAt}
          removeGuestAt={this.removeGuestAt}
          pendingGuest={this.state.pendingGuest}
        />
      </div>
    );
  }
}

export default App;
