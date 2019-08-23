export const addBoard = boardData => {
  let dateStr = new Date();
  let id = dateStr.getTime();
  let date = dateStr.toDateString();
  let listIds = [];
  let data = { [id]: Object.assign({}, boardData, { id, date, listIds }) };
  return {
    type: "ADD_BOARD_SUCCESS",
    data
  };
};

export const deleteBoard = id => {
  return {
    type: "DELETE_BOARD_SUCCESS",
    data: id
  };
};

export const addList = (listData, boardId) => {
  return dispatch => {
    let dateStr = new Date();
    let id = dateStr.getTime();
    let date = dateStr.toDateString();
    let cardIds = [];
    let data = { [id]: Object.assign({}, listData, { id, date, cardIds }) };
    dispatch({
      type: "ADD_LIST",
      data
    });
    dispatch({
      type: "ADD_LIST_TO_BOARD",
      data: { boardId, listId: id }
    });
  };
};

export const addListToBoard = (boardId, listId) => {
  return {
    type: "ADD_LIST_TO_BOARD",
    data: { boardId, listId }
  };
};
