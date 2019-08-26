import React from "react";
import { connect } from "react-redux";
import { Card } from "react-bootstrap";
import AddCard from "../../components/AddCard/AddCard";
import Cards from "../Cards/Cards";
import style from "./ListContainer.module.css";
import { addCard, moveCard } from "../../actions";
import { getCards } from "../../selectors";
import { Draggable, Droppable } from "react-drag-and-drop";
import { MdDelete } from "react-icons/md";
import PropTypes from "prop-types";
class ListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.onAddCard = this.onAddCard.bind(this);
    this.getCards = this.getCards.bind(this);
    this.deleteList = this.deleteList.bind(this);
  }

  onAddCard(cardData) {
    let { addCard, id } = this.props;
    addCard(cardData, id);
  }

  onDrop(id, data) {
    let { moveCard } = this.props;
    let dropObj = data.cards.split(",");
    let obj = {
      cardId: dropObj[0],
      fromList: dropObj[1],
      toList: id
    };
    moveCard && moveCard(obj);
  }

  getCards(listId) {
    let { cards, cardIds } = this.props;
    let cardHtml = cardIds.map((cardId, index) => {
      let card = cards[cardId];
      return (
        <Draggable key={index} type="cards" data={[card.id, listId]}>
          <Cards
            listId={listId}
            cardId={card.id}
            cardName={card.title}
            cardDesc={card.desc}
            createdTime={card.date}
          />
        </Draggable>
      );
    });
    return cardHtml;
  }

  deleteList(listId) {
    let { onDelete } = this.props;
    onDelete && onDelete(listId);
  }

  render() {
    let { title, id } = this.props;
    let cardHtml = this.getCards(id);
    return (
      <Card
        style={{
          width: "18rem",
          margin: "20px",
          display: "inline-block",
          minWidth: "18rem"
        }}
      >
        <Droppable types={["cards"]} onDrop={this.onDrop.bind(this, id)}>
          <Card.Body style={{ padding: "0.55rem" }}>
            <Card.Title>
              <div className={style.lstHdr}>{title}</div>
              <MdDelete
                className={style.listDlt}
                onClick={this.deleteList.bind(this, id)}
              />
            </Card.Title>
            <div className={style.crdLstCnt}>{cardHtml}</div>
          </Card.Body>
        </Droppable>
        <Card.Footer style={{ padding: "0" }}>
          <div className={style.addCdBtn}>
            <AddCard onAdd={this.onAddCard} />
          </div>
        </Card.Footer>
      </Card>
    );
  }
}

ListContainer.propTypes = {
  listId: PropTypes.string,
  cards: PropTypes.array,
  cardIds: PropTypes.array,
  addCard: PropTypes.func,
  moveCard: PropTypes.func,
  title: PropTypes.string,
  id: PropTypes.string
};

let mapStateToProps = (state, props) => {
  let listId = props.id;
  return {
    cards: getCards(state) || {},
    cardIds: state.lists[listId].cardIds
  };
};
export default connect(
  mapStateToProps,
  { addCard, moveCard }
)(ListContainer);
