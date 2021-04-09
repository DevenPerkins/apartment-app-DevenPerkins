import React, { Component } from 'react'
import { Button, Card, CardGroup, Col, Row } from 'reactstrap'
import { NavLink } from 'react-router-dom'


class MyAptIndex extends Component {
  render() {
    return (
      <>
      <h3>My Apartments</h3>
      <CardGroup className="cards">
          { this.props.myApts.map(apt => {
            return (
              <Card sm="4" key={ apt.id }>
                <div className="my-show-card">
                  <h4>Location</h4>
                  <h5>{ apt.street }</h5>
                  <h5>{ apt.city }, { apt.state }</h5>
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
                      <NavLink to="/myapts">
                        <Button color="secondary" onClick={ () => this.props.deleteApt(apt.id) }>
                          Remove Listing
                        </Button>
                      </NavLink>
                    </p>
                </div>
              </Card>
            )
          })}
      </CardGroup>
      </>
    )
  }
}
export default MyAptIndex