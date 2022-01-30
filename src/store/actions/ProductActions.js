import React from 'react'

export const fetchProducts = () =>{
    return {
        type: 'FETCH_PRODUCTS',
    }
}

export const fetchProductsSuccess = (products) => {
    console.log("Inside fetch product success", products);
    return {
        type: 'FETCH_PRODUCTS_SUCCESS',
        payload: products
    }
}
