export let getBoards = ({ boards }) => {
  let boardArray = [];
  for (var key in boards) {
    boardArray.push(boards[key]);
  }
  return boardArray;
};
