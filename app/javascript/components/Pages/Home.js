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
    <Container className="clean-block clean-info dark" fluid="md">
      <div className="container">
        <div className="block-heading">
          <h2 className="text-info">Info</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo.</p>
        </div>
        <div className="row align-items-center">
          <div className="col-md-6"><img className="img-thumbnail" src="/assets/img/scenery/image5.jpg?h=5a16d46fccd884924ce66752802d76c5" /></div>
          <div className="col-md-6">
            <h3>Lorem impsum dolor sit amet</h3>
            <div className="getting-started-info">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div><button className="btn btn-outline-primary btn-lg" type="button">Join Now</button>
          </div>
        </div>
      </div>
    </Container>
    <Container className="clean-block features" fluid="md">
      <div className="container">
        <div className="block-heading">
          <h2 className="text-info">Features</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo.</p>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-5 feature-box"><i className="icon-star icon" />
            <h4>Bootstrap 4</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo.</p>
          </div>
          <div className="col-md-5 feature-box"><i className="icon-pencil icon" />
            <h4>Customizable</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo.</p>
          </div>
          <div className="col-md-5 feature-box"><i className="icon-screen-smartphone icon" />
            <h4>Responsive</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo.</p>
          </div>
          <div className="col-md-5 feature-box"><i className="icon-refresh icon" />
            <h4>All Browser Compatibility</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo.</p>
          </div>
        </div>
      </div>
    </Container>
    <Container className="clean-block about-us" fluid="md">
      <div className="container">
        <div className="block-heading">
          <h2 className="text-info">About Us</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo.</p>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-6 col-lg-4">
            <div className="card text-center clean-card"><img className="card-img-top w-100 d-block" src="./components/Assets/img/avatars/avatar1.jpg?h=2bf47f2c2deaed837d2490a2db0a7175" />
              <div className="card-body info">
                <h4 className="card-title">John Smith</h4>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <div className="icons"><a href="#"><i className="icon-social-facebook" /></a><a href="#"><i className="icon-social-instagram" /></a><a href="#"><i className="icon-social-twitter" /></a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Container>
  </main>
</div>
</>
    )
  }
}

export default Home