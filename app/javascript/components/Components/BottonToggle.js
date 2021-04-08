import React from "react";
import { ButtonToggle } from "reactstrap";

class Button extends React.Component {
  render() {
    return (
      <div>
        <ButtonToggle color="primary">Search</ButtonToggle>{' '}
      </div>
    );
  }
}

export default Button;