import React from "react";
import { connect } from "react-redux";
import { Card } from "react-bootstrap";
import AddCard from "../../components/AddCard/AddCard";
import Cards from "../../components/Cards/Cards";
import style from "./ListContainer.module.css";
import { addCard } from "../../actions";
import { getCards } from "../../selectors";
class ListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.onAddCard = this.onAddCard.bind(this);
    this.getCards = this.getCards.bind(this);
  }

  onAddCard(cardData) {
    let { addCard, id } = this.props;
    addCard(cardData, id);
  }

  getCards() {
    let { cards, cardIds } = this.props;
    let cardHtml = cardIds.map((cardId, index) => {
      let card = cards[cardId];
      return (
        <Cards
          key={index}
          cardName={card.title}
          cardDesc={card.desc}
          createdTime={card.date}
        />
      );
    });
    return cardHtml;
  }

  render() {
    let { title } = this.props;
    let cardHtml = this.getCards();
    return (
      <Card style={{ width: "18rem", margin: "20px", display: "inline-block" }}>
        <Card.Body style={{ padding: "0.55rem" }}>
          <Card.Title>{title}</Card.Title>
          {cardHtml}
        </Card.Body>
        <Card.Footer style={{ padding: "0" }}>
          <div className={style.addCdBtn}>
            <AddCard onAdd={this.onAddCard} />
          </div>
        </Card.Footer>
      </Card>
    );
  }
}

let mapStateToProps = (state, props) => {
  let listId = props.id;
  return {
    cards: getCards(state) || {},
    cardIds: state.lists[listId].cardIds
  };
};
export default connect(
  mapStateToProps,
  { addCard }
)(ListContainer);
