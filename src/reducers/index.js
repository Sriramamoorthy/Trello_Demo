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
    lists: []
  }
};

export const boards = (state = initialBoard, { type, data }) => {
  switch (type) {
    case "ADD_BOARD_SUCCESS": {
      return Object.assign({}, state, data);
    }
    case "DELETE_BOARD_SUCCESS": {
      delete state[data];
      return state;
    }
    default:
      return state;
  }
};
