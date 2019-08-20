import React from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import style from "./BoardDetailView.module.css";
class BoardDetailView extends React.Component {
  render() {
    return (
      <Container className={style.bdDtlCont}>
        <Row>
          <Col>
            <h1>Detail View</h1>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state, props) => {
  let boardId = props.match.params.id || "";
  return {
    boardId,
    listIds: state.boards.boardId || []
  };
};
export default connect(mapStateToProps)(BoardDetailView);
