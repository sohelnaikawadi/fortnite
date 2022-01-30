import React from 'react'
import './productDetails.css'
import ProductDetailsInfo from './ProductDetailsInfo'

function ProductDetails() {
    // Make Image viewer component
    // Add Name description etc on the right
    // 
    return (
        <div className="product__details_top">
        <div className="product__details">
            <div className="product__image_list">
                <div className="product__image__item">
                <img className="image_component" src="https://robbreport.com/wp-content/uploads/2021/10/Nike_Jordan1.jpg?w=1000"/>
                </div>
                <div className="product__image__item">
                <img className="image_component" src="https://robbreport.com/wp-content/uploads/2021/10/Nike_Jordan1.jpg?w=1000"/>
                </div>
                <div className="product__image__item">
                <img className="image_component" src="https://robbreport.com/wp-content/uploads/2021/10/Nike_Jordan1.jpg?w=1000"/>
                </div>
                <div className="product__image__item">
                <img className="image_component" src="https://robbreport.com/wp-content/uploads/2021/10/Nike_Jordan1.jpg?w=1000"/>
                </div>
            </div>
            <div className="product_full_image">
                <img className="full_image_component" src="https://robbreport.com/wp-content/uploads/2021/10/Nike_Jordan1.jpg?w=1000"/>
            </div>
        </div>
       <div className="product__info">
           <ProductDetailsInfo/>
       </div>
        </div>
    )
}

export default ProductDetails
