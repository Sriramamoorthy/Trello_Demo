import React from "react";
import { Button } from "react-bootstrap";
import style from "./AddList.module.css";
import InputText from "../InputText/InputText";
export default class AddList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAddForm: false,
      listName: ""
    };
    this.toggleForm = this.toggleForm.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onAdd = this.onAdd.bind(this);
  }

  componentDidMount() {
    window.addEventListener("keyup", e => {
      let { showAddForm, listName } = this.state;
      if (showAddForm && listName != "" && e.keyCode === 13) {
        this.onAdd();
      }
    });
  }

  toggleForm() {
    this.setState({
      showAddForm: !this.state.showAddForm,
      listName: ""
    });
  }

  onChange(str) {
    this.setState({
      listName: str
    });
  }

  onAdd() {
    let { listName } = this.state;
    let { onAdd } = this.props;
    onAdd && onAdd({ title: listName });
    this.setState({
      listName: ""
    });
  }

  render() {
    let { showAddForm, listName } = this.state;
    return (
      <div className={style.addBtnCont}>
        {!showAddForm ? (
          <Button variant="secondary" block onClick={this.toggleForm}>
            Add List
          </Button>
        ) : (
          <div className={style.addListCont}>
            <InputText
              placeHolder="Enter List Name"
              onKeyup={this.onChange}
              value={listName}
            />
            <div className={style.addLst}>
              <Button
                variant="success"
                onClick={this.onAdd}
                disabled={listName == ""}
              >
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
