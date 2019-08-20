import React from "react";
import Card from "react-bootstrap/Card";
import { Container, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { getBoards } from "../../selectors/index";
import style from "./BoardContainer.module.css";
import AddModal from "../../components/AddModal/AddModal";
class BoardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAddBoard: false
    };
    this.toggleAddModal = this.toggleAddModal.bind(this);
  }

  handleAddBoard() {}

  toggleAddModal() {
    this.setState({
      showAddBoard: !this.state.showAddBoard
    });
  }
  render() {
    let { boards } = this.props;
    let { showAddBoard } = this.state;
    const boardHtml = boards.map((obj, index) => {
      return (
        <div className={style.boardTile} key={index}>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>{obj.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {obj.desc}
              </Card.Subtitle>
            </Card.Body>
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
              title="Add Board"
              hideModal={this.toggleAddModal}
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

export default connect(mapStateToProps)(BoardContainer);
