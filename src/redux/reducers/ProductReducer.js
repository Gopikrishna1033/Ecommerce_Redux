import { ActionTypes } from "../constants/action-types"

const initialstate = {
    products:[]
}
export const productReducer = (state=initialstate,{type,payload})=>{
    switch(type){
        case ActionTypes.SET_Products:
            return {...state, products:payload}
        default:
            return state
    }
}

export const selectedproductreducer = (state={} , {type, payload})=>{
    switch(type){
        case ActionTypes.SELECTED_PRODUCT:
            return {...state, ...payload};
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {};
        default:
            return state;
    }
}