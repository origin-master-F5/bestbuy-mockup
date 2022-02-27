import React from 'react';
import ItemCard from './ItemCard.jsx';
import CloseButton from '../../buttons/CloseButton.jsx';

const RecentlyViewedMenu = props => (

    <div className="navbar-menu-box-right">
        <div className="navbar-shopping-history-container">
            <div className="navbar-carousel">
                <div className="navbar-carousel-header">
                    <h2 className="navbar-carousel-header-content">
                        <span>
                            <img src="https://origin-master.s3-us-west-1.amazonaws.com/order_history.svg" width="34" style={{ "margin-right": "10px", "margin-bottom": "3px", "height": "30px" }} />
                                You recently viewed
                                </span>
                    </h2>
                    <span className="navbar-carousel-header-link">
                        <a href="#" className="navbar-link">
                            See your full history&nbsp;
                                    <i className="navbar-caret-right" style={{ "font-size": ".4em" }}></i>
                        </a>
                    </span>
                </div>
                <ItemCard />
                <ItemCard />
                <ItemCard />
            </div>
        </div>
        <div className="navbar-arrow" style={{ "left": "calc(70%)" }}>

        </div>
        <CloseButton />
    </div>
)

export default RecentlyViewedMenu;