import React from 'react'
import './productDetailsInfo.css'
import ReactStars from 'react-rating-stars-component'

function ProductDetailsInfo() {
    return (
        <div className="product__details__info">
            <div className="product__name">No Way Home Bundle No Way Home Bundle No Way Home Bundle</div>
            <div className="product__ratings">
                <div className="product__stars"><ReactStars
                    edit={false}
                    value={4}
                    count={5}
                    size={24}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                />
                </div>
                <div className="product__rating_number">(1787 ratings)</div>
                </div>
                <div className="product__mrp">M.R.P: <strike>$100.00</strike></div>
                <div className="product__price">Price: $70.00</div>
                <div className="product__saving">You Save: $30.00 (30%)</div>
                <div className="product__tax__line">Inclusive of all taxes</div>
            <div className="product__replacement">7 day replacement policy only</div>
            <div>
            <li className="product__description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, expedita. Autem beatae similique vitae vel harum hic modi impedit a inventore ab animi dicta qui adipisci veniam illum, quo fuga!</li>
            <li className="product__description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, expedita. Autem beatae similique vitae vel harum hic modi impedit a inventore ab animi dicta qui adipisci veniam illum, quo fuga!</li>
            <li className="product__description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, expedita. Autem beatae similique vitae vel harum hic modi impedit a inventore ab animi dicta qui adipisci veniam illum, quo fuga!</li>
            <li className="product__description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, expedita. Autem beatae similique vitae vel harum hic modi impedit a inventore ab animi dicta qui adipisci veniam illum, quo fuga!</li>
            </div>
        </div>
    )
}

export default ProductDetailsInfo
