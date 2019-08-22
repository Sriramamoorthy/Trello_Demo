import React from "react";
import { connect } from "react-redux";
import { Container, Row, Card } from "react-bootstrap";
import CardContainer from "../CardContainer/CardContainer";
import style from "./BoardDetailView.module.css";
import { getBoardName } from "../../selectors";
class BoardDetailView extends React.Component {
  render() {
    let { boardName } = this.props;
    return (
      <React.Fragment>
        <div>{boardName}</div>
        <Container className={style.bdDtlCont}>
          <Row>
            <Card style={{ width: "18rem", marginRight: "20px" }}>
              <Card.Body>
                <Card.Title>Card One</Card.Title>
                <CardContainer />
                <CardContainer />
                <CardContainer />
                <CardContainer isAdd={true} />
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem", marginRight: "20px" }}>
              <Card.Body>
                <Card.Title>Card One</Card.Title>
                <CardContainer />
                <CardContainer />
                <CardContainer />
                <CardContainer isAdd={true} />
              </Card.Body>
            </Card>

            <Card style={{ width: "18rem", marginRight: "20px" }}>
              <Card.Body>
                <Card.Title>Card One</Card.Title>
                <CardContainer />
                <CardContainer />
                <CardContainer />
                <CardContainer isAdd={true} />
              </Card.Body>
            </Card>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, props) => {
  let boardId = props.match.params.id || "";
  return {
    boardId,
    boardName: getBoardName(state.boards, boardId),
    listIds: state.boards.boardId || []
  };
};
export default connect(mapStateToProps)(BoardDetailView);
