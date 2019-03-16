import * as types from './../constants/ActionType';
// import * as Message from './../constants/Message';
export const actAddCart = (product, quantity) => {
    return {
        type: types.ADD_TO_CART,
        product,
        quantity
    }
}

export const actChangeMessage = (message) => {
    return {
        type: types.CHANGE_MESSAGE,
        message
    }
}

export const actDeleteProduct = (product) => {
    return{
        type: types.DELETE_PRODUCT,
        product
    }
}
export const actUpdateProduct = (product, quantity) => {
    return{
        type: types.UPDATE_PRODUCT_IN_CART,
        product,
        quantity
    }
} 