import React from 'react'
import './Checkout.css'
function Checkout() {
  return (
    <div className='checkout'>
        <div className="checkout_left">
            <div className="checkout_title">
                <h2>Your Shopping Basket</h2>
            </div>
        </div>
        <div className="checkout_right">
            <h2>The Subtotal</h2>
        </div>
    </div>
  )
}

export default Checkout