import React from "react";
import { Button } from "react-bootstrap";
import style from "./AddCard.module.css";
import InputText from "../InputText/InputText";
import { MdNoteAdd } from "react-icons/md";
export default class AddCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAddForm: false,
      cardName: "",
      cardDesc: ""
    };
    this.toggleForm = this.toggleForm.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDesc = this.onChangeDesc.bind(this);
    this.onAdd = this.onAdd.bind(this);
  }

  toggleForm() {
    this.setState({
      showAddForm: !this.state.showAddForm,
      cardName: "",
      cardDesc: ""
    });
  }

  componentDidMount() {
    window.addEventListener("keyup", e => {
      let { showAddForm, cardName } = this.state;
      if (showAddForm && cardName != "" && e.keyCode === 13) {
        this.onAdd();
      }
    });
  }

  onChangeName(str) {
    this.setState({
      cardName: str
    });
  }

  onChangeDesc(str) {
    this.setState({
      cardDesc: str
    });
  }

  onAdd() {
    let { cardName, cardDesc } = this.state;
    let { onAdd } = this.props;
    onAdd && onAdd({ title: cardName, desc: cardDesc });
    this.setState({
      cardName: "",
      cardDesc: ""
    });
  }

  render() {
    let { showAddForm, cardName, cardDesc } = this.state;
    return (
      <div className={style.addBtnCont}>
        {!showAddForm ? (
          <Button
            variant="secondary"
            style={{ background: "#efefef", border: "#efefef", color: "#aaa" }}
            block
            onClick={this.toggleForm}
          >
            <MdNoteAdd className={style.addIcon} />
            Add Card
          </Button>
        ) : (
          <div className={style.addListCont}>
            <InputText
              placeHolder="Enter Card Name"
              onKeyup={this.onChangeName}
              value={cardName}
            />
            <InputText
              placeHolder="Enter Card Description"
              onKeyup={this.onChangeDesc}
              value={cardDesc}
            />
            <div className={style.addLst}>
              <Button variant="success" onClick={this.onAdd}>
                Add
              </Button>
            </div>
            <div className={style.cnclLst}>
              <Button variant="outline-secondary" onClick={this.toggleForm}>
                Cancel
              </Button>
            </div>
          </div>
        )}
      </div>
    );
  }
}
