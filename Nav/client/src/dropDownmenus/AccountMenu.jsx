import React from 'react';
import CloseButton from '../buttons/CloseButton.jsx';

const AccountMenu = props => (
    <div className="navbar-menu-box-right">
        <div className="navbar-account-menu-container">
            <div className="navbar-account-menu-app">
                <div className="navbar-not-recognized">
                    <div className="navbar-am-link-container">
                        <div className="navbar-am-link-wrapper">
                            <ul className="navbar-am-links">
                                <li>
                                    <a href="#">Track Order</a>
                                </li>
                                <li>
                                    <a href="#">Purchases</a>
                                </li>
                                <li>
                                    <a href="#">Digital Library</a>
                                </li>
                            </ul>
                            <hr className="navbar-am-links-divider" />
                            <ul className="navbar-am-links">
                                <li>
                                    <a href="#">Rewards</a>
                                </li>
                                <li>
                                    <a href="#">Manage Your Account</a>
                                </li>
                                <li>
                                    <a href="#">Credit Cards</a>
                                </li>
                            </ul>
                            <hr className="navbar-am-links-divider" />
                            <ul className="navbar-am-links">
                                <li>
                                    <a href="#">Check Repair Status</a>
                                </li>
                                <li>
                                    <a href="#">Plans & Services</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="navbar-am-signin-container">
                        <div style={{ "width": "320px" }}>
                            <div style={{ "padding-top": "45px" }}>
                                <h3 className="navbar-am-signin-title">Welcome!</h3>
                                <p className="navbar-am-signin-content">Sign in to see your rewards, exclusive offers, saved items and more.</p>
                                <a href="#">
                                    <button className="navbar-am-signin-button navbar-btn navbar-btn-secondary">Sign In</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="navbar-am-orseparator" style={{ "margin": "30px 0" }}>
                        <div className="navbar-am-vertical-bar"></div>
                        <div className="navbar-am-or"></div>
                    </div>

                    <div className="navbar-create-account-container">
                        <div style={{ "width": "320px" }}>
                            <div style={{ "color": "#1d252c" }}>
                                <h3>Create An Account</h3>
                                <p className="navbar-create-account-description">Sign up and enjoy these benefits:</p>
                                <ul>
                                    <li className="navbar-create-account-text" style={{ "margin": "0 0 15px"}}>
                                        <img className="navbar-create-account-check" src="https://origin-master.s3-us-west-1.amazonaws.com/check.svg" />
                                         Exclusive member-only offers
                                    </li>
                                    <li className="navbar-create-account-text" style={{ "margin": "0 0 15px" }}>
                                        <img className="navbar-create-account-check" src="https://origin-master.s3-us-west-1.amazonaws.com/check.svg" />
                                         Rewards for your purchases
                                    </li>
                                    <li className="navbar-create-account-text" style={{ "margin": "0 0 15px" }}>
                                        <img className="navbar-create-account-check" src="https://origin-master.s3-us-west-1.amazonaws.com/check.svg" />
                                         Faster checkout & easy order tracking
                                    </li>
                                    <li className="navbar-create-account-text" style={{ "margin": "0 0 15px" }}>
                                        <img className="navbar-create-account-check" src="https://origin-master.s3-us-west-1.amazonaws.com/check.svg" />
                                         Saved purchase history
                                    </li>
                                </ul>
                                <a href="#">
                                    <button className="navbar-create-account-button navbar-btn-tertiary navbar-btn">
                                        Create Account
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div className="navbar-arrow" style={{ "left": "calc(54%)" }}>

        </div>
        <CloseButton />
    </div>
)

export default AccountMenu;