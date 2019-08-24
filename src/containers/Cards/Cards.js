import React from "react";
import style from "./Cards.module.css";
import { Modal, Button } from "react-bootstrap";
import InputText from "../../components/InputText/InputText";
import { MdEventNote, MdSpeakerNotes } from "react-icons/md";
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
              <Modal.Title>
                <MdEventNote className={style.mr15} />
                {cardName}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body
              style={{
                minHeight: "420px",
                maxHeight: "500px",
                overflowY: "auto"
              }}
            >
              <div>{cardDesc}</div>
              <span>Created at {createdTime}</span>
              <div className={style.mt20}>
                <h4 className={style.actHdr}>
                  <MdSpeakerNotes className={style.mr15} />
                  Comments
                </h4>
                <InputText placeHolder="Write your comments..." />
              </div>
            </Modal.Body>
          </Modal>
        ) : null}
      </React.Fragment>
    );
  }
}
