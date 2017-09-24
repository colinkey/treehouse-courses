import React from "react";
import PropTypes from "prop-types";

import GuestName from "./GuestName";

const Guest = props => (
  <li>
    <GuestName
      isEditing={props.isEditing}
      setNameAt={e => props.setNameAt(e.target.value)}
    >
      {props.name}
    </GuestName>
    <label>
      <input
        type="checkbox"
        checked={props.isConfirmed}
        onChange={props.toggleConfirmationAt}
      />
      Confirmed
    </label>
    <button onClick={props.toggleEditingAt}>
      {props.isEditing ? "save" : "edit"}
    </button>
    <button onClick={props.removeGuestAt}>remove</button>
  </li>
);

Guest.propTypes = {
  name: PropTypes.string.isRequired,
  isConfirmed: PropTypes.bool.isRequired,
  isEditing: PropTypes.bool.isRequired,
  toggleConfirmationAt: PropTypes.func.isRequired,
  toggleEditingAt: PropTypes.func.isRequired,
  setNameAt: PropTypes.func.isRequired,
  removeGuestAt: PropTypes.func.isRequired
};

export default Guest;
