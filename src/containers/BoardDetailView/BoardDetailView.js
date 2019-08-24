import React from "react";
import { connect } from "react-redux";
import style from "./BoardDetailView.module.css";
import AddList from "../../components/AddList/AddList";
import ListContainer from "../ListContainer/ListContainer";
import { getBoardName, getLists } from "../../selectors";
import { addList, deleteList } from "../../actions";
class BoardDetailView extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddList = this.handleAddList.bind(this);
    this.getLists = this.getLists.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  handleAddList(data) {
    let { addList, match } = this.props;
    addList(data, match.params.id);
  }

  onDelete(listId) {
    let { boardId, deleteList } = this.props;
    deleteList({ boardId, listId });
  }

  getLists() {
    let { lists, listIds } = this.props;
    let html = listIds.map((listId, index) => {
      let list = lists[listId];
      return (
        <ListContainer
          key={index}
          id={list.id}
          title={list.title}
          onDelete={this.onDelete}
        />
      );
    });
    return html;
  }

  render() {
    let { boardName } = this.props;
    let listHtml = this.getLists();
    return (
      <React.Fragment>
        <div>{boardName}</div>
        <div className={style.bdDtlCont}>
          {listHtml}
          <div className={style.addBtn}>
            <AddList onAdd={this.handleAddList} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, props) => {
  let boardId = props.match.params.id || "";
  return {
    boardId,
    boardName: getBoardName(state.boards, boardId),
    listIds: state.boards[boardId].listIds || [],
    lists: getLists(state) || {}
  };
};
export default connect(
  mapStateToProps,
  { addList, deleteList }
)(BoardDetailView);
