import React, { Component } from "react";
import { Redirect } from "react-router";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { Button } from 'reactstrap';

class AptNew extends Component {
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
            <Label for="name">Apt's Name</Label>
            <Input
              type="text"
              name="name"
              value={ this.state.form.name }
              onChange={ this.handleChange }
            />
          </FormGroup>
          <FormGroup>
            <Label for="age">Apt's Age</Label>
            <Input
              type="number"
              name="age"
              value={ this.state.form.age }
              onChange={ this.handleChange }
            />
          </FormGroup>
          <FormGroup>
            <Label for="enjoys">What does your Apt enjoy?</Label>
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
            Submit Apt
          </Button>
        </Form>
        { this.state.submitted && <Redirect to="/Aptindex" /> }
      </>
    );
  }
}
export default AptNew;
