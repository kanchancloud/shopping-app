import {actionType} from "../constants/ActionType";

const initialState = {
    product: [],
    numberCart:0,
    Carts: [],
}

export const setProductReducers = (state = initialState, action) => {
    switch (action.type) {
        case actionType.SET_PRODUCTS:
            return {...state, product: action.payload};
        case actionType.GET_NUMBER_CART:
            return {
                ...state
            }
        case actionType.ADD_CART:
            if (state.numberCart === 0) {
                let cart = {
                    id: action.payload.id,
                    quantity: 1,
                    name: action.payload.name,
                    image: action.payload.image,
                    price: action.payload.price
                }
                state.Carts.push(cart);
            } else {
                let check = false;
                state.Carts.map((item, key) => {
                    if (item.id === action.payload.id) {
                        state.Carts[key].quantity++;
                        check = true;
                    }
                })
                if (!check) {
                    let _cart = {
                        id: action.payload.id,
                        quantity: 1,
                        name: action.payload.name,
                        image: action.payload.image,
                        price: action.payload.price
                    }
                    state.Carts.push(_cart)
                }
            }

            return {
                ...state,
                Carts: state.Carts,
                numberCart: state.numberCart + 1
            }
        case actionType.INCREASE_QUANTITY:
            state.numberCart++
            state.Carts[action.payload].quantity++;
            return {
                ...state
            }
        case actionType.DECREASE_QUANTITY:
            let quantity=state.Carts[action.payload].quantity;
            if(quantity>1){
                state.numberCart--;
                state.Carts[action.payload].quantity--;
            }
            return {
                ...state
            }
        case actionType.DELETE_CART:
           let quantity_= state.Carts[action.payload].quantity;
            return {
                ...state,
                numberCart:state.numberCart-quantity_,
                Carts:state.Carts.filter(item=>{
                    return item.id != state.Carts[action.payload].id
                })

            }

        default:
            return state;
    }

}