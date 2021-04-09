import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import { Jumbotron, Container } from 'reactstrap';

class AptIndex extends Component {
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props
    return (
      <>
          <div>
      <Jumbotron fluid  className="display-3">
        <Container className="-jumbo-container" fluid className="display-3">
        <h1 className="display-3">Here are the available apartments</h1>
        <ul className="lead">
          {this.props.apts.map((apt) => {
            return (
            <li key={apt.id}>
                <NavLink to={`/aptshow/${apt.id}`}>{apt.street}</NavLink>
            </li>
            )
          })}
        </ul>
        </Container>
      </Jumbotron>
    </div>
      </>
    );
  }
}
export default AptIndex;
