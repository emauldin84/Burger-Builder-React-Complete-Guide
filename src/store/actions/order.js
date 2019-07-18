import * as actionTypes from './actionTypes'
import axios from '../../axios-orders'

export const purchaseBurgerSuccess = (id, orderData) => {
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderData: orderData,
    }
}

export const purchaseBurgerFail = (error) => {
    return {
        type: actionTypes.PURCHASE_BURGER_FAIL,
        error: error,
        
    }
}

export const purchaseBurgerStart = (orderData) => {
    return dispatch => {
        // must add .json to end of url for Firebase
        axios.post('/orders.json', orderData)
            .then(response => {
                console.log('response.data',response.data)
                dispatch(purchaseBurgerSuccess(response.data, orderData ))
            })
            .catch(error => {
                dispatch(purchaseBurgerFail(error))
            })
    }
}