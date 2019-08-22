export let getBoards = ({ boards }) => {
  let boardArray = [];
  for (var key in boards) {
    boardArray.push(boards[key]);
  }
  return boardArray;
};

export let getBoardName = (state, id) => {
  console.log(state);
  return state[id].title || "";
};
