import React from "react";
import style from "./Cards.module.css";
import { Modal, Button } from "react-bootstrap";
export default class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({
      showModal: !this.state.showModal
    });
  }

  render() {
    let { cardName, cardDesc, createdTime } = this.props;
    let { showModal } = this.state;
    return (
      <React.Fragment>
        <div className={style.crdCont} onClick={this.toggleModal}>
          {cardName}
        </div>
        {showModal ? (
          <Modal show={showModal} onHide={this.toggleModal}>
            <Modal.Header closeButton>
              <Modal.Title>{cardName}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div>{cardDesc}</div>
              <span>{createdTime}</span>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={this.toggleModal}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        ) : null}
      </React.Fragment>
    );
  }
}
