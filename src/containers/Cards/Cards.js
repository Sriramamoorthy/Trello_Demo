import React from "react";
import { connect } from "react-redux";
import style from "./Cards.module.css";
import { Modal, Button } from "react-bootstrap";
import InputText from "../../components/InputText/InputText";
import { deleteCard, addComment, editCard } from "../../actions";
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
      showModal: false,
      comment: "",
      isEdit: false,
      editCardName: ""
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.onTypeComment = this.onTypeComment.bind(this);
    this.onAddComment = this.onAddComment.bind(this);
    this.onTypeNewCard = this.onTypeNewCard.bind(this);
    this.onEditCard = this.onEditCard.bind(this);
    this.closeEdit = this.closeEdit.bind(this);
  }

  toggleModal() {
    if (!this.state.isEdit) {
      this.setState({
        showModal: !this.state.showModal,
        comment: ""
      });
    }
  }

  onDelete(e) {
    e.stopPropagation();
    let { cardId, listId, deleteCard } = this.props;
    deleteCard({ cardId, listId });
  }

  onEdit(e) {
    e.stopPropagation();
    let { cardId, listId, cardName } = this.props;
    this.setState({ isEdit: true, editCardName: cardName });
  }

  closeEdit(e) {
    e.stopPropagation();
    this.setState({
      isEdit: false,
      editCardName: ""
    });
  }

  onEditCard(e) {
    e.stopPropagation();
    let { editCardName } = this.state;
    let { cardId, editCard } = this.props;
    editCard({ cardId, editCardName });
    this.setState({
      isEdit: false,
      editCardName: ""
    });
  }

  onTypeComment(str) {
    this.setState({
      comment: str
    });
  }

  onTypeNewCard(str) {
    this.setState({
      editCardName: str
    });
  }

  onAddComment() {
    let { comment } = this.state;
    let { addComment, cardId } = this.props;
    addComment(cardId, comment);
    this.setState({
      comment: ""
    });
  }

  getComments() {
    let { comments } = this.props;
    const commentHtml = comments.map((obj, index) => {
      return (
        <li className={style.cmtLst} key={index}>
          <p className={style.m0}>{obj.comment}</p>
          <span className={style.cmtDt}>{obj.date}</span>
        </li>
      );
    });
    return commentHtml;
  }

  render() {
    let { cardName, cardDesc, createdTime } = this.props;
    let { showModal, comment, isEdit, editCardName } = this.state;
    let commentHtml = this.getComments();
    return (
      <React.Fragment>
        <div className={style.crdCont} onClick={this.toggleModal}>
          {isEdit ? (
            <div>
              <InputText value={editCardName} onKeyup={this.onTypeNewCard} />
              <div className={style.addLst}>
                <Button variant="primary" onClick={this.onEditCard}>
                  Save
                </Button>
              </div>
              <div className={style.cnclLst}>
                <Button variant="outline-secondary" onClick={this.closeEdit}>
                  Cancel
                </Button>
              </div>
            </div>
          ) : (
            <div>
              {cardName}
              <MdModeEdit className={style.editIcn} onClick={this.onEdit} />
              <MdDelete className={style.editIcn} onClick={this.onDelete} />
            </div>
          )}
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
                <InputText
                  placeHolder="Write your comments..."
                  onKeyup={this.onTypeComment}
                  value={comment}
                />
                <Button
                  style={{ float: "right", marginTop: "15px" }}
                  variant="primary"
                  disabled={comment == ""}
                  onClick={this.onAddComment}
                >
                  Add Comment
                </Button>
                <div className={style.commentCont}>
                  <ul>{commentHtml}</ul>
                </div>
              </div>
            </Modal.Body>
          </Modal>
        ) : null}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, props) => {
  let cardId = props.cardId;
  return {
    comments: state.cards[cardId].comments || []
  };
};

export default connect(
  mapStateToProps,
  { deleteCard, addComment, editCard }
)(Cards);
