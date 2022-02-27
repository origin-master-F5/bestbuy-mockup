import React from 'react';

const CartButton = props => (
    <div className="navbar-cart-container">
        <a>
            <img src="https://origin-master.s3-us-west-1.amazonaws.com/bbcart.svg"/>
            <span className="navbar-cart-label">
                Cart
            </span>
        </a>

    </div>
)

export default CartButton;