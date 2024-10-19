import { combineReducers } from "redux";
import { productReducer } from "./ProductReducer";

const reducers = combineReducers({
    allproducts:productReducer,
})

export default reducers;