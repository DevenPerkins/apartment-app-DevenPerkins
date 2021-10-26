import React from 'react';
import { Form, FormGroup, Label, Input} from 'reactstrap';
import Button from './BottonToggle.js'

const SearchBar = (props) => {
  return (
    <Form className="search-bar" inline>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
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