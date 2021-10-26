import React, { Component } from 'react'
import { Button, Card, CardTitle, Col, Row } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import { faHome, faCity } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
      <div className="page-body">
        <h3>All the Apartments</h3>
        <br />
        <br />
        <Row className="cards">
          {this.props.apts && this.props.apts.map(apartment => {
            return (
              <Card key={apartment.id}>
                <div>
                  <FontAwesomeIcon icon={faHome} className="fa-icon" />
                    {apartment.street}
                </div>
                <div>
                  <FontAwesomeIcon icon={faCity} className="fa-icon" />
                    {apartment.city}, {apartment.state}
                </div>
                <br />
                <NavLink to={`/apartmentshow/${apartment.id}`}>
                  <Button>
                    More Info
                  </Button>
                </NavLink>
              </Card>
            )
          })}
        </Row>
      </div>
      </>
    );
  }
}
export default AptIndex;
