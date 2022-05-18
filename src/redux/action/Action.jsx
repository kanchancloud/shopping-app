import {actionType} from "../constants/ActionType";

export const setProduct = (products) => {
    return {
        type: actionType.SET_PRODUCTS,
        payload: products,
    };
};

/*GET NUMBER CART*/
export function GetNumberCart() {
    return {
        type: 'GET_NUMBER_CART'
    }
}

export function AddCart(payload) {
    return {
        type: 'ADD_CART',
        payload
    }
}

 export function UpdateCart(payload) {
    return {
        type: 'UPDATE_CART',
        payload
    }
}

 export function DeleteCart(products) {
    return {
        type: 'DELETE_CART',
        payload: products,
    }
}

export function IncreaseQuantity(payload) {
    return {
        type: 'INCREASE_QUANTITY',
        payload
    }
}

export function DecreaseQuantity(payload) {
    return {
        type: 'DECREASE_QUANTITY',
        payload
    }
}
export function setLoginStatus(payload) {
    return {
        type: 'SET_LOGIN_STATUS',
        payload
    }
}
