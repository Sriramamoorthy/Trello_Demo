import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import BoardContainer from "../BoardContainer/BoardContainer";
import style from "./AppContainer.module.css";
export default class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: ""
    };
  }

  render() {
    return (
      <div>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="#home">Trello</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
        </Navbar>
        <div className={style.bodyCont}>
          <BoardContainer />
        </div>
      </div>
    );
  }
}
