import React from "react";
import PropTypes from "prop-types";

const GuestInputForm = props => (
  <form onSubmit={e => props.addInvitedGuest(e)}>
    <input
      type="text"
      value={props.pendingGuest}
      placeholder="Invite Someone"
      onChange={props.handleNameInput}
    />
    <button type="submit" name="submit" value="submit">
      Submit
    </button>
  </form>
);

GuestInputForm.PropTypes = {
  addInvitedGuest: PropTypes.func.isRequired,
  pendingGuest: PropTypes.string.isRequired,
  handleNameInput: PropTypes.string.isRequired
};

export default GuestInputForm;
