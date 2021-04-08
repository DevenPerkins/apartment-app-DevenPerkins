import React, { Component } from "react";
import { Redirect } from "react-router";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { Button } from 'reactstrap';
import { NavLink } from 'react-router-dom'

class CatEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        name: "",
        age: "",
        enjoys: ""
      },
      submitted: false
    };
  }

  handleChange = (e) => {
    let { form } = this.state;
    form[e.target.name] = e.target.value;
    this.setState({ form: form });
  };

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.updateCat(this.state.form , this.props.cat.id)
    this.setState({ submitted: true })
  }

  render() {
    return (
      <>
        <h2>Edit a Cat</h2>
        <Form>
          <FormGroup>
            <Label for="name">Cat's Name</Label>
            <Input
              type="text"
              name="name"
              value={ this.state.form.name }
              onChange={ this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="age">Cat's Age</Label>
            <Input
              type="number"
              name="age"
              value={ this.state.form.age }
              onChange={ this.handleChange }
            />
          </FormGroup>
          <FormGroup>
            <Label for="enjoys">What does your cat enjoy?</Label>
            <Input
              type="text"
              name="enjoys"
              value={ this.state.form.enjoys }
              onChange={ this.handleChange }
            />
          </FormGroup>
          <Button
          onClick={ this.handleSubmit }
          >
            Edit Cat
          </Button>
        </Form>
        { this.state.submitted && <Redirect to={ `/catshow/${ this.props.cat.id }` }/> }
      </>
    );
  }
}
export default CatEdit;
