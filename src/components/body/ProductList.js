import React from 'react'
import Product from './Product'
import './productList.css'
import {connect} from 'react-redux'

const getFirstxProducts = (numberOfProducts, products) =>{
   var arr = [];
   for (var index = 0; index < numberOfProducts; index++) {
    arr=[...arr, products[index]]
}
return arr;
}

function ProductList({products}) {
   console.log("productList in component", products[0])
    const firstProducts = getFirstxProducts(8, products);

    console.log('firstProducts', firstProducts);
    return (

        // {product}
        
        <div className="product__list">
                {firstProducts?.map(product=>(
                    <div >
                    <Product product={product}/>
                    </div>
                ))}
        </div>  
    //     <div className="product__list">
    //    <Product/>
    //    <Product/>
    //    <Product/>
    //    <Product/>
    //    <Product/>
    //    <Product/>
    //    <Product/>
    //     </div>
        
    )
}

const mapStateToProps= (state)=>{
    console.log("state", state)
    return {
        products: state.ProductReducer.products,
    }
};

export default connect(mapStateToProps)(ProductList)