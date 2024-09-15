import React from 'react'
import './ProductItem.css'

function ProductItem({image, discount, title, lessPrice, originalPrice, newTag=''}) {
    let t, n, dt, d;
    if(newTag == 'new'){
        t = 'newTag';
        n = 'New';
    }

    if(discount != ''){
        dt = 'discountTag';
    }

  return (
    <div className='productBox'>
        <div className="productImgBox">
            <div className="imgTag">
                <div className='tag'>
                    <p className={t}>{n}</p>
                    
                    <p className={dt}>{discount}</p>
                </div>
                <img src="./src/assets/wishlist.svg" alt="" className="wishlist" />
            </div>
            <img src={image} alt="Product Image" className="productImg" />
        </div>
        <div className="productInfo">
            <div className="ratingBox">
                <img src="./src/assets/star.svg" alt="rating" className='star' />
                <img src="./src/assets/star.svg" alt="rating" className='star' />
                <img src="./src/assets/star.svg" alt="rating" className='star' />
                <img src="./src/assets/star.svg" alt="rating" className='star' />
                <img src="./src/assets/star.svg" alt="rating" className='star' />
            </div>
            <p className="productTitle">{title}</p>
            <div className="prodductPrice">
                <p className="lessPrice">{lessPrice}</p>
                <p className="originalPrice">{originalPrice}</p>
            </div>
        </div>
    </div>
  )
}

export default ProductItem