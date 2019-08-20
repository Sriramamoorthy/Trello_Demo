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
