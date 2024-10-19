import { combineReducers } from "redux";
import { productReducer,selectedproductreducer } from "./ProductReducer";

const reducers = combineReducers({
    allproducts:productReducer,
    product:selectedproductreducer,
})

export default reducers;