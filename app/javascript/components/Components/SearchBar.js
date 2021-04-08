import React from 'react';
import { Form, FormGroup, Label, Input} from 'reactstrap';
import Button from './BottonToggle.js'

const SearchBar = (props) => {
  return (
    <Form className="search-bar">
      <FormGroup>
        <Input
          type="search"
          name="search"
          id="exampleSearch"
          placeholder="search nearby listings"
        />
      </FormGroup>
      <Button />
    </Form>
  );
}

export default SearchBar;