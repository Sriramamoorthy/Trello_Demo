import React from "react";
import { Button } from "react-bootstrap";
import style from "./AddList.module.css";
import InputText from "../InputText/InputText";
export default class AddList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAddForm: false,
      cardName: ""
    };
    this.toggleForm = this.toggleForm.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onAdd = this.onAdd.bind(this);
  }

  toggleForm() {
    this.setState({
      showAddForm: !this.state.showAddForm,
      cardName: ""
    });
  }

  onChange(str) {
    this.setState({
      cardName: str
    });
  }

  onAdd() {
    let { cardName } = this.state;
    let { onAdd } = this.props;
    onAdd && onAdd({ title: cardName });
  }

  render() {
    let { showAddForm, cardName } = this.state;
    return (
      <div className={style.addBtnCont}>
        {!showAddForm ? (
          <Button variant="secondary" block onClick={this.toggleForm}>
            Add Card
          </Button>
        ) : (
          <div className={style.addListCont}>
            <InputText
              placeHolder="Enter Card Name"
              onKeyup={this.onChange}
              value={cardName}
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
