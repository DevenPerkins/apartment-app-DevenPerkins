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
        <Container fluid className="display-3">
        <h1 className="display-3">Here are your eligible kitties</h1>
        <ul className="lead">
          {this.props.Apts.map((Apt) => {
            return (
            <li key={Apt.id}>
                <NavLink to={`/Aptshow/${Apt.id}`}>{Apt.name}</NavLink>
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
