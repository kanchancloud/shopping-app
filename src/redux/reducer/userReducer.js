import {actionType} from "../constants/ActionType";

const initialState = {
    loggedIn: false
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.SET_LOGIN_STATUS:
            console.log(action)
            return {
                ...state,
                loggedIn: action.payload
            }

        default:
            return state;
    }
}