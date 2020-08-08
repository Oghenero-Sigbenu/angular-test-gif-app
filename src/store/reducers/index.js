import { combineReducers } from "redux";
import gifReducer from "./gif";

const rootReducer = combineReducers({
gif: gifReducer
});

export default rootReducer;