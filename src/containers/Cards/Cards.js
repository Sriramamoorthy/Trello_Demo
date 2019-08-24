import React from "react";
import { connect } from "react-redux";
import style from "./Cards.module.css";
import { Modal } from "react-bootstrap";
import InputText from "../../components/InputText/InputText";
import { deleteCard } from "../../actions";
import {
  MdEventNote,
  MdSpeakerNotes,
  MdModeEdit,
  MdDelete
} from "react-icons/md";
class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onEdit = this.onEdit.bind(this);
  }

  toggleModal() {
    this.setState({
      showModal: !this.state.showModal
    });
  }

  onDelete(e) {
    e.stopPropagation();
    let { cardId, listId, deleteCard } = this.props;
    deleteCard({ cardId, listId });
  }

  onEdit(e) {
    e.stopPropagation();
    let { cardId, listId } = this.props;
    console.log(cardId, listId);
  }

  render() {
    let { cardName, cardDesc, createdTime } = this.props;
    let { showModal } = this.state;
    return (
      <React.Fragment>
        <div className={style.crdCont} onClick={this.toggleModal}>
          {cardName}
          <MdModeEdit className={style.editIcn} onClick={this.onEdit} />
          <MdDelete className={style.editIcn} onClick={this.onDelete} />
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

const mapStateToProps = (state, props) => {
  return {};
};

export default connect(
  mapStateToProps,
  { deleteCard }
)(Cards);
