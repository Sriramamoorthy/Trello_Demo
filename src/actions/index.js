export const addBoard = boardData => {
  return {
    type: "ADD_BOARD_SUCCESS",
    data: boardData
  };
};
