import React from 'react';
import StoreLocatorButton from './StoreLocatorButton.jsx';
import CartButton from './CartButton.jsx';
import SearchBar from './SearchBar.jsx';


const TopBarMiddle = props => (
    <div className="navbar-topbarmiddle-container">
        <div className="searchbarcontainer">
            <SearchBar />
        </div>
        <div className="middle-right">
            <StoreLocatorButton activeMenu={props.activeMenu} setActiveMenu={props.setActiveMenu} />
            <CartButton />
        </div>

    </div>
)

export default TopBarMiddle;