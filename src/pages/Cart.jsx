import React from 'react'
import './Cart.css'
import Header from '../components/Header'
import CartItem from '../components/CartItem'
import SignButton from '../components/signButton'
import Footer from '../components/Footer'

function Cart() {
  return (
    <div className='flex w-full flex-col items-center'>
        <Header />
        <div className="cartBox">

            <p className="cartTitle">Cart</p>

            <div className="cartLocation">
                <div className="locPart cartActive">
                    <p className="cartSl">1</p>
                    <p className="cartLocTitle">Shopping Cart</p>
                </div>


                <div className="locPart ">
                    <p className="cartSl">2</p>
                    <p className="cartLocTitle">Checkout details</p>
                </div>


                <div className="locPart ">
                    <p className="cartSl">3</p>
                    <p className="cartLocTitle">Order complete</p>
                </div>
            </div>

            <div className="itemsPriceBox">
                <div className="cartItemsBox">

                    <div className="cItemBox">
                        <div className="itemList">
                            <div className="itemTitleBox">
                                <p>Product</p>
                                <p>Quantity</p>
                                <p>Price</p>
                                <p>Subtotal</p>
                            </div>
                            <CartItem 
                                imageUrl={'./src/assets/table1.png'}
                                itemName={'Tray Table'}
                                color={'Black'}
                                price={'19'}
                                subTotal={'38'}
                            />   

                            <CartItem 
                                imageUrl={'./src/assets/item1.png'}
                                itemName={'Loveseat Sofa'}
                                color={'Gray'}
                                price={'200'}
                                subTotal={'360'}
                            />    

                            <CartItem 
                                imageUrl={'./src/assets/item3.png'}
                                itemName={'Table Lamp'}
                                color={'Golden'}
                                price={'10'}
                                subTotal={'13'}
                            />    
                        </div>   
                    </div>   

                    <div className="cartPriceBox">
                        <div className="priceTitle">Cart Summary</div>
                        <div className="ship">
                            <div>
                                <input type="radio" name="chk" id=""  />
                                <p className="shipType">Free shipping</p>
                            </div>
                            <p className="shipPrice">$0.00</p>
                        </div>

                        <div className="ship">
                            <div>
                                <input type="radio" name="chk" id=""  />
                                <p className="shipType">Express shipping</p>
                            </div>
                            <p className="shipPrice">+$15.00</p>
                        </div>

                        <div className="ship">
                            <div>
                                <input type="radio" name="chk" id=""  />
                                <p className="shipType">Pick Up</p>
                            </div>
                            <p className="shipPrice">+$21.00</p>
                        </div>

                        <div className="subT">
                            <p>Subtotal</p>
                            <p>$1234.00</p>
                        </div>

                        <div className="total">
                            <p>Total</p>
                            <p>$1334.00</p>
                        </div>

                        <SignButton children={'Checkout'} />
                    </div>                 
                </div>
            </div>

            <div className="couponBox">
                <p className='hvCoup'>Have a coupon?</p>
                <p className='addCoup'>Add you code for an instant cart discount</p>
                <div className='couponInput'>
                    <img src="./src/assets/coupon.svg" alt="" />
                    <input type="text" placeholder='Coupon Code'/>
                    <button>Apply</button>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Cart