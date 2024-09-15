import React from 'react'
import './OrderSummary.css'
import '../index.css'

function Item({itemName, color, price, imageUrl}) {
  return (
    <div className="cartItem">
        <div className='itemDes'>
            <img src={imageUrl} alt="" srcset="" className='itemImg' />
            <div className="itemDetail">
                <p className="itemTitle">{itemName}</p>
                <p className="itemColor">Color: {color}</p>
                <div className="countBox">
                    <button>-</button>
                    <p className="num">2</p>
                    <button>+</button>
                </div>
            </div>
        </div>
        <div className='itemDel'>
            <p className="price">${price}</p>
            <img src="./src/assets/delete.svg" alt="" srcset="" className='delete' />
        </div>
    </div>
  )
}

export default Item