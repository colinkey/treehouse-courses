import React from "react";
import PropTypes from "prop-types";

const PendingGuest = props => {
  if (props.name) {
    return <li className="pending">{props.name}</li>;
  }
  return null;
};

PendingGuest.PropTypes = {
  name: PropTypes.string.isRequired
};

export default PendingGuest;
