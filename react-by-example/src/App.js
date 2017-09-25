import React, { Component } from "react";
import firebase from "firebase";
import "./App.css";

import Header from "./Header";
import MainContent from "./MainContent";

//TODO
// 1. Update firebase writing to write name to object name
// 2. Refactor toggleGuestPropertyAt method to send toggle information to guests in firebase
// 3. Implement read/write of lastUniqueId
// 4. Figure out remaining methods (removeGuest, setNameAt)

class App extends Component {
  state = {
    isFiltered: false,
    pendingGuest: "",
    guests: []
  };

  guestsRef = firebase.database().ref("guests");

  lastUniqueId = 0;

  nextUniqueId = () => {
    let nextId = this.lastUniqueId + 1;
    this.lastUniqueId++;
    return nextId;
  };

  toggleGuestPropertyAt = (property, id) => {
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
  };

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
    const id = this.nextUniqueId();
    const guestObj = {
      id,
      name: this.state.pendingGuest,
      isConfirmed: false,
      isEditing: false
    };
    this.guestsRef.push(guestObj);
    this.setState({
      guests: [guestObj, ...this.state.guests],
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
