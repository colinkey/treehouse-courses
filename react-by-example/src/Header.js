import React from "react";
import PropTypes from "prop-types";

import GuestInputForm from "./GuestInputForm";

const Header = props => (
  <header>
    <h1>RSVP</h1>
    <p>A Treehouse App</p>
    <GuestInputForm
      addInvitedGuest={props.addInvitedGuest}
      pendingGuest={props.pendingGuest}
      handleNameInput={props.handleNameInput}
    />
  </header>
);

Header.PropTypes = {
  addInvitedGuest: PropTypes.func.isRequired,
  pendingGuest: PropTypes.string.isRequired,
  handleNameInput: PropTypes.string.isRequired
};

export default Header;
