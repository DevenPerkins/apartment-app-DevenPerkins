import React, { Component } from "react";
import { Redirect } from "react-router";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { Button } from 'reactstrap';

class AptNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        street: "",
        city: "",
        state: "",
        bedrooms:"",
        bathrooms:"",
        pets:"",
        cost:""
      },
      submitted: false
    };
  }

  handleChange = (e) => {
    let { form } = this.state;
    form[e.target.name] = e.target.value;
    this.setState({ form: form });
  };

  handleSubmit = () => {
    this.props.createNewApt(this.state.form)
    this.setState({ submitted: true })
  }

  render() {
    return (
      <>
        <h2>Add a New Apt</h2>
        <Form>
        <FormGroup>
            <Label for="street">Apt's Name</Label>
            <Input
              type="text"
              name="street"
              value={ this.state.form.street }
              onChange={ this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="city">Apt's Age</Label>
            <Input
              type="text"
              name="city"
              value={ this.state.form.city}
              onChange={ this.handleChange }
            />
          </FormGroup>
          <FormGroup>
            <Label for="state">Whats your apt State?</Label>
            <Input
              type="text"
              name="state"
              value={ this.state.form.state }
              onChange={ this.handleChange }
            />
          </FormGroup>
          <FormGroup>
            <Label for="bedrooms">Whats your apt bedrooms?</Label>
            <Input
              type="number"
              name="bedrooms"
              value={ this.state.form.bedrooms }
              onChange={ this.handleChange }
            />
          </FormGroup>
          <FormGroup>
            <Label for="bathrooms">Whats your apt bathrooms?</Label>
            <Input
              type="number"
              name="bathrooms"
              value={ this.state.form.bathrooms }
              onChange={ this.handleChange }
            />
          </FormGroup>
          <FormGroup>
            <Label for="pets">Whats your apt pets?</Label>
            <Input
              type="text"
              name="pets"
              value={ this.state.form.pets }
              onChange={ this.handleChange }
            />
          </FormGroup>
          <FormGroup>
            <Label for="cost">Whats your apt cost?</Label>
            <Input
              type="text"
              name="cost"
              value={ this.state.form.cost }
              onChange={ this.handleChange }
            />
          </FormGroup>
          <Button
          onClick={ this.handleSubmit }
          >
            Submit Apt
          </Button>
        </Form>
        { this.state.submitted && <Redirect to="/aptindex" /> }
      </>
    );
  }
}
export default AptNew;
