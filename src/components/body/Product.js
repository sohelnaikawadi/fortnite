import React from 'react'
import './product.css'
import ReactStars from 'react-rating-stars-component'
import {useState} from 'react'

//"https://robbreport.com/wp-content/uploads/2021/10/Nike_Jordan1.jpg?w=1000"

function Product({product}) {
    
//    const [stars, setStars] = useState(0);
//    setStars(Math.round(product?.item?.ratings?.avgStars));

    return (
        <div className="product">
            <img className="product__image" src={product?.item.images.icon} alt=""/>
            <div className="product__name__price">
                <div className="product__name">{product?.item.name}</div>
                <div className="product__price">${product?.item.cost}</div>
            </div>
            <div className="product__rating">
                <div className="product_rating_star">
                {Math.round(product?.item?.ratings?.avgStars)&&<ReactStars
                edit={false}
                value={Math.round(product?.item?.ratings?.avgStars)}
                count={5}
                size={24}
                isHalf={true}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ffd700"
                />}
                </div>
                <div className="product__review__count">
                    ({product?.item.ratings.numberVotes} Ratings)
                </div>
            </div>
        </div>
    )
}

export default Product
