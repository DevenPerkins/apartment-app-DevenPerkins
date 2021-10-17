import React from "react";
import { Jumbotron, Container } from 'reactstrap';
import AptCards from "../Components/AptCards.js";
import SearchBar from "../Components/SearchBar.js";


class Home extends React.Component {

  render() {
    return(
      <>
<div>
  <main className="page landing-page">
  <div>
      <Jumbotron fluid className="jumbotron">
        <Container fluid className="jumbo-container">
          <h1 className="display-3">Discover Your Next Home</h1>
          <p className="lead">Jeff Goldblum has helped over 100 million find a home.</p>
          <SearchBar className="main-search" /> 
        </Container>
      </Jumbotron>
    </div>
    <Container fluid="md">
      <AptCards />
    </Container>
  </main>
</div>
</>
    )
  }
}

export default Home