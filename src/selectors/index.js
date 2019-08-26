export let getBoards = ({ boards }) => {
  let boardArray = [];
  for (var key in boards) {
    boardArray.push(boards[key]);
  }
  return boardArray;
};

export let getLists = ({ lists }) => lists;

export let getCards = ({ cards }) => cards;

export let getBoardName = (state, id) => {
  return (state[id] && state[id].title) || "";
};
