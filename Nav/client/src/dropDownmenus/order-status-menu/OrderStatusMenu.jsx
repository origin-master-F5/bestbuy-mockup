import React from 'react';
import CloseButton from '../../buttons/CloseButton.jsx';
import orderIcon from '../../assets/order_icon.png';

const OrderStatusMenu = props => (
    <div className="navbar-menu-box-right">
        <div className="navbar-order-status-container">
            <div className="navbar-carousel">
                <div className="navbar-carousel-header">
                    <h2 className="navbar-carousel-header-content">
                        <span>
                            <img src={orderIcon} width="34" style={{ "marginRight": "10px", "marginBottom": "3px", "height": "30px" }} />
                                Order Status
                                </span>
                    </h2>
                </div>

                <div className="navbar-login-container">
                    <div className="navbar-login">
                        <div>
                            <h1 className="navbar-login-header">
                                Hi there! Looking
                            <br />
                            for a current order?
                            </h1>
                            <p className="navbar-login-subheader">
                                You'll need to sign in or have your order number handy.
                            </p>
                            <a href="#">
                                <button className="navbar-btn navbar-btn-secondary">Continue</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="navbar-arrow" style={{ "left": "calc(83%)" }}>

        </div>
        <CloseButton />
    </div>
)

export default OrderStatusMenu;