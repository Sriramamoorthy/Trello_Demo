import React from "react";
import Card from "react-bootstrap/Card";

export default class AppContainer extends React.Component {
  render() {
    return (
      <div>
        <Card style={{ width: "18rem", background: "#efefef" }}>
          <Card.Body>
            <Card.Title>Board 1</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Board Description
            </Card.Subtitle>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", background: "#efefef" }}>
          <Card.Body>
            <Card.Title>Board 1</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Board Description
            </Card.Subtitle>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", background: "#efefef" }}>
          <Card.Body>
            <Card.Title>Board 1</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Board Description
            </Card.Subtitle>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", background: "#efefef" }}>
          <Card.Body>
            <Card.Title>Board 1</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Board Description
            </Card.Subtitle>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
