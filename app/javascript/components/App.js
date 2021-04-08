import React from "react";
import PropTypes from "prop-types";
import apts from './mockApts.js';
import {
  BrowserRouter as  Router,
  NavLink,
  Route,
  Switch
} from 'react-router-dom';
import Header from "./Components/Header.js";
import Footer from "./Components/Footer";
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';
import Home from './Pages/Home';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apts: apts,
    };
  }
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props
    return (
      <Router>
        <Header />
        { logged_in &&
          <div>
            <a href={sign_out_route }>Sign Out</a>
          </div>
        }
        { !logged_in &&
          <div>
            <a href={ sign_in_route }>Sign In</a>
          </div>
        }
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/about" component={ AboutUs } />
          <Route path="/learn" component={ ContactUs } />
        </Switch>
      <Footer />
      </Router>
      
    )
  }
}

export default App
