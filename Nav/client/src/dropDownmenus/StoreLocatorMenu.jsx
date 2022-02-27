import React from 'react';

const StoreLocatorMenu = props => (

    <div class="navbar-store-loc-overlay" style={{ "left": "-34.5px" }}>
        <div className="navbar-store-selector-overlay">
            <h2>Culver City Westfield</h2>
            <span className="navbar-hours-open">Open Until 6pm</span>
            <div className="navbar-store-address">
                <address className="navbar-store-selector-address">
                    <div>6000 Sepulveda Blvd</div>
                    <div>Culver City, CA 90230</div>
                </address>
            </div>
            <div className="navbar-store-detail">
                <a className="navbar-store-detail-btn navbar-link">
                    See store details for our new safety measures
                    </a>
                <a className="navbar-find-store-btn">
                    Find Another Store
                    </a>
            </div>
            <div className="navbar-arrow" style={{ "left": "calc(50% - 11px)" }}>

            </div>
            <button className="navbar-close-icon" onClick={() => {props.setActiveMenu('')}}>
                <span>×</span>
                <span className="sr-only">Close</span>
            </button>
        </div>
    </div>

)

export default StoreLocatorMenu;