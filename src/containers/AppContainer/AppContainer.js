import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import BoardContainer from "../BoardContainer/BoardContainer";
import BoardDetailView from "../BoardDetailView/BoardDetailView";
import style from "./AppContainer.module.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
export default class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: ""
    };
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">Trello</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
            </Nav>
          </Navbar>
          <div className={style.bodyCont}>
            <Switch>
              <Route exact path="/boards" component={BoardContainer} />
              <Route path="/boards/:id" component={BoardDetailView} />
              <Redirect exact from="/" to="boards" />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
