export const demo = (state = "", action) => {
  switch (action.type) {
    case "DEMO_SUCCESS": {
      state = action.data;
      return state;
    }
    default:
      return state;
  }
};

let initialBoard = {
  123: {
    id: "123",
    title: "The Rise of USA",
    desc: "Involves the rise of United States",
    listIds: ["321", "124"]
  }
};

let initialCards = {
  321: {
    id: "321",
    title: "To Do List",
    cardIds: []
  },
  124: {
    id: "124",
    title: "Doing",
    cardIds: []
  }
};

export const boards = (state = initialBoard, { type, data }) => {
  switch (type) {
    case "ADD_BOARD_SUCCESS": {
      return Object.assign({}, state, data);
    }
    case "ADD_LIST_TO_BOARD": {
      let newState = Object.assign({}, state);
      newState[data.boardId].listIds.push(data.listId);
      return newState;
    }
    case "REMOVE_LIST_FROM_BOARD": {
      let newState = Object.assign({}, state);
      let listIds = newState[data.boardId].listIds;
      var filteredIds = listIds.filter(value => value != data.listId);
      newState[data.boardId].listIds = filteredIds;
      return newState;
    }
    case "DELETE_BOARD_SUCCESS": {
      let newState = Object.assign({}, state);
      delete newState[data];
      return newState;
    }
    default:
      return state;
  }
};

export const lists = (state = initialCards, { type, data }) => {
  switch (type) {
    case "ADD_LIST":
      return Object.assign({}, state, data);
    case "ADD_CARD_TO_LIST": {
      let newState = Object.assign({}, state);
      newState[data.listId].cardIds.push(data.cardId);
      return newState;
    }
    case "REMOVE_CARD_FROM_LIST": {
      let newState = Object.assign({}, state);
      let cardIds = newState[data.listId].cardIds;
      var filteredIds = cardIds.filter(value => value != data.cardId);
      newState[data.listId].cardIds = filteredIds;
      return newState;
    }
    case "DELETE_CARD_FROM_LIST": {
      let newState = Object.assign({}, state);
      let cardIds = newState[data.listId].cardIds;
      var filteredIds = cardIds.filter(value => value != data.cardId);
      newState[data.listId].cardIds = filteredIds;
      return newState;
    }
    case "DELETE_LIST": {
      let newState = Object.assign({}, state);
      delete newState[data];
      return newState;
    }
    default:
      return state;
  }
};

export const cards = (state = {}, { type, data }) => {
  switch (type) {
    case "ADD_CARD":
      return Object.assign({}, state, data);
    case "DELETE_CARD":
      let newState = Object.assign({}, state);
      delete newState[data];
      return newState;
    case "DELETE_CARDS_OF_LIST": {
      let newState = Object.assign({}, state);
      data.map(id => {
        delete newState[id];
      });
      return newState;
    }
    case "ADD_COMMENT": {
      let newState = Object.assign({}, state);
      newState[data.cardId].comments.push(data.commentObj);
      return newState;
    }
    case "EDIT_CARD_NAME": {
      let newState = Object.assign({}, state);
      newState[data.cardId].title = data.cardName;
      return newState;
    }
    default:
      return state;
  }
};
