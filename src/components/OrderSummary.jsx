import React from 'react'
import './OrderSummary.css'
import Item from './Item'
import SignButton from '../components/signButton'

function OrderSummary() {

  return (
    <div className="overlay">
        <div className='cartBox'>
            <div className="allItem">
                <div className="cartHead">
                    <p className="cart">Cart</p>
                    <img src="./src/assets/close.svg" alt="" srcset="" className='close' />
                </div>
                <div className="itemsBox">
                    {[{ itemName: 'Tray Table', color: 'Black', price: 19.19, imageUrl: './src/assets/table1.png' }].map((item, index) => (
                        <Item
                            key={index}
                            itemName={item.itemName}
                            color={item.color}
                            price={item.price}
                            imageUrl={item.imageUrl}
                        />
                        ))}


                    {[{ itemName: 'Tray Table', color: 'Black', price: 21.00, imageUrl:  './src/assets/table2.png'}].map((item, index) => (
                        <Item
                            key={index}
                            itemName={item.itemName}
                            color={item.color}
                            price={item.price}
                            imageUrl={item.imageUrl}
                        />
                    ))}


                    {[{ itemName: 'Table lamp', color: 'gold', price: 39.00, imageUrl:  './src/assets/table3.png'}].map((item, index) => (
                        <Item
                            key={index}
                            itemName={item.itemName}
                            color={item.color}
                            price={item.price}
                            imageUrl={item.imageUrl}
                        />
                    ))}


                </div>
            </div>
            <div className="checkoutBox">
                <div className="subTotalBox stb">
                    <p className="subTotal">Subtotal</p>
                    <p className="subTotalPrice">$99.00</p>
                </div>
                <div className="subTotalBox">
                    <p className="totalPrice">Total</p>
                    <p className="totalPrice">$234.00</p>
                </div>
                <SignButton>Checkout</SignButton>
                <a href="#" className='viewCart'>View Cart</a>
            </div>
        </div>
    </div>
  )
}

export default OrderSummary