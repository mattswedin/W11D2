import { createStore, applyMiddleware } from "redux";
import { rootReducer } from '../reducers/root_reducer';
import { thunk } from "../middleware/thunk";

export const configureStore = (preloadedState = {}) => {
    return createStore(rootReducer, preloadedState, applyMiddleware(thunk))
}