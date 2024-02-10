import { legacy_createStore } from "redux";
import ticketsReducer from "../Ex2/reduces/reducer";

const store=legacy_createStore(ticketsReducer);
export default store;