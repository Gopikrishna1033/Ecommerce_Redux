import { ActionTypes } from "../constants/action-types"

const initialstate = {
    products:[
        {
            id:1,
            title:'VenkataGopiKrishnna',
            category:'Developer'
        }
    ]
}
export const productReducer = (state=initialstate,{type,payload})=>{
    switch(type){
        case ActionTypes.SET_Products:
            return state
        default:
            return state
    }
}