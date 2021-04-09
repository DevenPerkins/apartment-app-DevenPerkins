import React, { Component } from 'react'
import { Button, Card, CardTitle, Col, Row } from 'reactstrap'
import { NavLink } from 'react-router-dom'


class MyAptIndex extends Component {
  render() {
    return (
      <>
      <h3>My Apartments</h3>
      <Row className="cards">
          { this.props.myApts.map(apt => {
            return (
              <Col sm="4" key={ apt.id }>
                <div className="my-show-card">
                  <h4>Location</h4>
                  <h5>{ apt.street }</h5>
                  <h5>{ apt.city }, { apt.state }</h5>
                  <br />
                  {/* <h4>Manager Info</h4>
                  <h5>{ faUser } className="fa-icon" />{ apt.manager }</h5>
                  <h5>{ faEnvelope } className="fa-icon" />{ apt.email }</h5> */}
                  <br />
                  <h4>Details</h4>
                  <h5>{ apt.price } per month</h5>
                  <h5>Bedrooms: { apt.bedrooms }</h5>
                  <h5>Bathrooms: { apt.bathrooms }</h5>
                  <h5>Pets Allowed: { apt.pets }</h5>
                    <p className="my-card-button">
                      <NavLink to={`/aptedit/${apt.id}`}>
                        <Button color="secondary">
                          Update Listing
                        </Button>
                      </NavLink>
                      <NavLink to="/ss">
                        <Button color="secondary" onClick={ () => this.props.deleteApt(apt.id) }>
                          Remove Listing
                        </Button>
                      </NavLink>
                    </p>
                </div>
              </Col>
            )
          })}
      </Row>
      </>
    )
  }
}
export default MyAptIndex