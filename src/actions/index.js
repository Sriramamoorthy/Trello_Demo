export const addBoard = boardData => {
  let dateStr = new Date();
  let id = dateStr.getTime();
  let date = dateStr.toDateString();
  let data = { [id]: Object.assign({}, boardData, { id, date }) };
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
