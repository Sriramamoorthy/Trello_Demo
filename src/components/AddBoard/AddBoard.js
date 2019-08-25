import React from "react";
import { Modal, Button } from "react-bootstrap";
import InputText from "../InputText/InputText";
import style from "./AddBoard.module.css";
export default class AddBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      desc: ""
    };
    this.onTypeDesc = this.onTypeDesc.bind(this);
    this.onTypeTitle = this.onTypeTitle.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  componentDidMount() {
    window.addEventListener("keyup", e => {
      let { title } = this.state;
      if (title != "" && e.keyCode === 13) {
        this.onSubmit();
      }
    });
  }

  onTypeTitle(str) {
    this.setState({
      title: str
    });
  }

  onTypeDesc(str) {
    this.setState({
      desc: str
    });
  }

  onSubmit() {
    let { onSubmit } = this.props;
    let { title, desc } = this.state;
    onSubmit &&
      onSubmit({
        title,
        desc
      });
    this.hideModal();
  }

  hideModal() {
    this.setState({
      title: "",
      desc: ""
    });
    this.props.hideModal();
  }

  render() {
    let { isShow, boardTitle } = this.props;
    let { title, desc } = this.state;
    return (
      <Modal
        size="sm"
        show={isShow}
        onHide={this.hideModal}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            {boardTitle}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className={style.inputWrapper}>
            <InputText
              onKeyup={this.onTypeTitle}
              placeHolder="Enter Title"
              value={title}
            />
          </div>
          <div className={style.inputWrapper}>
            <InputText
              onKeyup={this.onTypeDesc}
              placeHolder="Enter Description"
              value={desc}
            />
          </div>
          <div className={style.submitButton}>
            <Button
              variant="primary"
              type="submit"
              onClick={this.onSubmit}
              disabled={title === ""}
            >
              {boardTitle}
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    );
  }
}
