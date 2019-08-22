import React from "react";
import style from "./CardContainer.module.css";
export default class CardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetail: false
    };
  }

  render() {
    let { isAdd = false } = this.props;
    return (
      <div className={isAdd ? style.addCont : style.cardCont}>
        <span>{isAdd ? "Add Card" : "Card one"}</span>
      </div>
    );
  }
}
