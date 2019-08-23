import React from "react";
import Card from "react-bootstrap/Card";
import { Container, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { getBoards } from "../../selectors/index";
import style from "./BoardContainer.module.css";
import AddModal from "../../components/AddModal/AddModal";
import { addBoard, deleteBoard } from "../../actions";
class BoardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAddBoard: false
    };
    this.toggleAddModal = this.toggleAddModal.bind(this);
    this.handleAddBoard = this.handleAddBoard.bind(this);
  }

  handleAddBoard(obj) {
    this.props.addBoard(obj);
  }

  toggleAddModal() {
    this.setState({
      showAddBoard: !this.state.showAddBoard
    });
  }

  deleteBoard(id) {
    this.props.deleteBoard(id);
  }

  openBoardDetail(id) {
    let { history } = this.props;
    history && history.push("/boards/" + id);
  }

  render() {
    let { boards } = this.props;
    let { showAddBoard } = this.state;
    const boardHtml = boards.map((obj, index) => {
      return (
        <div className={style.boardTile} key={index}>
          <Card style={{ width: "18rem" }}>
            <Card.Body onClick={this.openBoardDetail.bind(this, obj.id)}>
              <Card.Title>{obj.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {obj.desc}
              </Card.Subtitle>
            </Card.Body>
            <div className={style.deleteCont}>
              <span
                className={style.deleteButton}
                onClick={this.deleteBoard.bind(this, obj.id)}
              >
                Delete
              </span>
            </div>
          </Card>
        </div>
      );
    });
    return (
      <div className={style.BoardContainer}>
        <Container>
          <Row>
            {boardHtml}
            <div className={style.boardTile} onClick={this.toggleAddModal}>
              <Card
                style={{ width: "18rem", background: "#6c757d", color: "#fff" }}
              >
                <Card.Body>
                  <Card.Title>Add Board</Card.Title>
                </Card.Body>
              </Card>
            </div>
            <AddModal
              isShow={showAddBoard}
              boardTitle="Add Board"
              hideModal={this.toggleAddModal}
              onSubmit={this.handleAddBoard}
            />
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    boards: getBoards(state)
  };
};

export default connect(
  mapStateToProps,
  {
    addBoard,
    deleteBoard
  }
)(BoardContainer);
