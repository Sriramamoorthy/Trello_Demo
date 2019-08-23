import React from "react";
import { connect } from "react-redux";
import { Container, Row, Card } from "react-bootstrap";
import CardContainer from "../CardContainer/CardContainer";
import style from "./BoardDetailView.module.css";
import AddList from "../../components/AddList/AddList";
import { getBoardName, getLists } from "../../selectors";
import { addList, addListToBoard } from "../../actions";
class BoardDetailView extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddList = this.handleAddList.bind(this);
    this.getCards = this.getCards.bind(this);
  }

  handleAddList(data) {
    let { addList, match } = this.props;
    addList(data, match.params.id);
  }

  getCards() {
    let { lists } = this.props;
    let html = lists.map((list, index) => {
      return (
        <Card key={index} style={{ width: "18rem", margin: "20px" }}>
          <Card.Body>
            <Card.Title>{list.title}</Card.Title>
            <CardContainer isAdd={true} />
          </Card.Body>
        </Card>
      );
    });
    return html;
  }

  render() {
    let { boardName } = this.props;
    let listHtml = this.getCards();
    return (
      <React.Fragment>
        <div>{boardName}</div>
        <Container className={style.bdDtlCont}>
          <Row>
            {listHtml}
            <div className={style.addBtn}>
              <AddList onAdd={this.handleAddList} />
            </div>
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
    listIds: state.boards[boardId].listIds || [],
    lists: getLists(state) || []
  };
};
export default connect(
  mapStateToProps,
  { addList, addListToBoard }
)(BoardDetailView);
