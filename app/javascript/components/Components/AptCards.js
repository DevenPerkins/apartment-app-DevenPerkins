import React from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody, CardGroup
} from 'reactstrap';

const AptCards = (props) => {
  return (
    <>
    <h3>Apartments</h3>
    <CardGroup className="cards">
        { this.props.apts.map(apt => {
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
                    <NavLink to={`/aptshow/${apt.id}`}>{apt.street}>
                      <Button color="secondary">
                        View Listing
                      </Button>
                    </NavLink>
                  </p>
              </div>
            </Card>
          )
        })}
    </CardGroup>
    </>
    
    
  );
};

export default AptCards;