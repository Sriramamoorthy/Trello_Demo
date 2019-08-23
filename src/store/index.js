import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import promise from "redux-promise-middleware";
import { demo, boards, lists, cards } from "../reducers";

const middleware = applyMiddleware(thunk, logger, promise);

const store = createStore(
  combineReducers({
    demo,
    boards,
    lists,
    cards
  }),
  {},
  middleware
);
export default store;
