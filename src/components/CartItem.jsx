import React from 'react'
import './CartItem.css'

function CartItem({imageUrl, itemName, color, price=0, subTotal=0}) {
  return (
    <div className="cartProduct">
        <div className='itemDes'>
            <img src={imageUrl} alt="" srcset="" className='itemImg' />
            <div className="itemDetail">
                <p className="itemTitle">{itemName}</p>
                <p className="itemColor">Color: {color}</p>
                <div className="removeItem">
                    <img src="./src/assets/delete.svg" alt="" />
                    <p className="del">Remove</p>
                </div>
            </div>
        </div>

        <div className="countBox">
            <button>-</button>
            <p className="num">2</p>
            <button>+</button>
        </div>
        <p className="ciRate">${price}</p>
        <p className="ciRate csTotal">${subTotal}</p>
    </div>
  )
}

export default CartItem