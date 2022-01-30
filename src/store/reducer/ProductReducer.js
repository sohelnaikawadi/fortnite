import React from 'react'

const initialState = {
    products:[],
}

function ProductReducer(state = initialState, action) {
    const response = action?.payload;
    console.log('response in reducer', response)
    switch(action.type){
        case 'FETCH_PRODUCTS':
            return {
                ...state
            }
        case 'FETCH_PRODUCTS_SUCCESS':
            return {
                products: response ,
            }
        default:
            return state;
    }
}

export default ProductReducer
