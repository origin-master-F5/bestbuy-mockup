import React from 'react';
import cartIcon from '../assets/cart.png'

const CartButton = props => (
    <div className="navbar-cart-container">
        <a>
            <img src={cartIcon}/>
            <span className="navbar-cart-label">
                Cart
            </span>
        </a>

    </div>
)

export default CartButton;