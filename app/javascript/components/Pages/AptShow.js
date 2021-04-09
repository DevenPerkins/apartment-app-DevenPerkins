import React from "react"
import {
  Button,
  NavLink
} from "reactstrap";

class AptShow extends React.Component {
  render(){
    const apt = this.props.apt
  return(
    <div>
      <h1>Apt Info</h1>

      <div>Street: { apt.street }</div>
      <div>City: { apt.city }</div>
      <div>State: { apt.state }</div>
      <div>Bedrooms: { apt.bedrooms }</div>
      <div>Bathrooms: { apt.bathrooms }</div>
      <div>Pets: { apt.pets }</div>
      <div>Cost: { apt.price } per month</div>
      <NavLink
         href={`/aptedit/${ this.props.apt.id }`}
      >
        <Button color="secondary">
          Edit Apt Profile
        </Button>
      </NavLink>
    </div>
    
  )
}
}
export default AptShow;