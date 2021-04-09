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
import Home from './Pages/Home';
import AptIndex from "./Pages/AptIndex";
import MyAptIndex from './Pages/MyApartmentIndex';
import AptShow from "./Pages/AptShow";
import AptNew from "./Pages/AptNew";
import AptEdit from "./Pages/AptEdit";
import NotFound from "./Pages/NotFound";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apts: apts,
    };
  }

  createNewApt = (newapt) => {
    console.log(newapt)
  }

  updateApt = (apt, id) => {
    console.log("apt:", apt)
    console.log("id:", id)
  }

  deleteApt = (id) => {
    console.log(id)
  };

  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props
    const { apts } = this.state
    console.log("logged_in:", logged_in)
    console.log("current user:", current_user)
    console.log("apt:", apts)
    return (
      <Router>
        <Header         
        logged_in={ logged_in }
        sign_in_route={ sign_in_route }
        sign_out_route={ sign_out_route }
        />

        <Switch>
        <Route exact path="/" component={ Home } />
        <Route
            path="/aptindex"
            render={(props) => <AptIndex apts={ this.state.apts } />}
          />
          <Route path="/aptshow/:id" render = {(props) => {
            //get the id from the URL
            // Const id to be that of the id of a apt and the plus sign changes the datatype to an integer because without it it will be passed as a string
            const id = +props.match.params.id;
            // finding the apt from mock data using the id by finding the apts data
            const foundApt = this.state.apts.find(apt => apt.id === id);
            // pass that apt into aptShow as propData
            return <AptShow apt={foundApt}/>}
          } />
          { logged_in &&
            <Route
              path="/myapts"
              render={ (props) => {
                let myApts = apts.filter(apt => apt.user_id === current_user.id)
                return (
                  <MyAptIndex
                    myApts={ myApts }
                    deleteApt={ this.deleteApt }
                  />
                )
              }}
            />
          }
          { logged_in &&
           <Route path="/aptnew" render={(props) => {
            return <AptNew createNewApt={
              this.createNewApt } />
          }}
           />
        }
          { logged_in &&
          <Route 
          exact path={ "/aptedit/:id" } render={(props) => {
            let id = props.match.params.id
            let apt = this.state.apts.find(apt => apt.id === +id)
            return (
              <AptEdit
                updateApt = { this.updateApt }
                apts={ apt }
              />
            )
          }} 
        />
        }
          <Route component={ NotFound }/>
        </Switch>
      <Footer />
      </Router>
      
    )
  }
}

export default App;
