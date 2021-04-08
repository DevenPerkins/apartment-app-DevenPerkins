import React from "react"

class ListApts extends React.Component {
  render(){
    const apt = this.props.apt
  return(
    <div>
      <h1>Apt Info</h1>

      <div>Street: { Apt.street }</div>
      <div>City: { Apt.city }</div>
      <div>State: { Apt.state }</div>
      <div>Bedrooms: { Apt.bedrooms }</div>
      <div>Bathrooms: { Apt.bathrooms }</div>
      <div>Pets: { Apt.pets }</div>
      <NavLink
         href={`/Aptedit/${ this.props.Apt.id }`}
      >
        <Button color="secondary">
          Edit Apt Profile
        </Button>
      </NavLink>
    </div>
    
  )
}
}
export default ListApts