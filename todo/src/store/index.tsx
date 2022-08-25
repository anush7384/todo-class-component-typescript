import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";

import { todoReducer } from "../store/reducer/index";

const logger = createLogger();
export const store = createStore(todoReducer,applyMiddleware(logger));


