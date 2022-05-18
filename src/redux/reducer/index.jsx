import {combineReducers} from "redux";
import {setProductReducers} from './ProductReducers'
import {userReducer} from "./userReducer";

export const reducers=combineReducers({
    AllProduct:setProductReducers,
    userReducer: userReducer
})
export default reducers;