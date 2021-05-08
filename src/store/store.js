import { createStore } from "redux";
import AppReducer from "./reducers/filterReducers";

export const store = createStore(AppReducer);
