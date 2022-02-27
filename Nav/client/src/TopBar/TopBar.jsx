import React from 'react';
import Logo from './Logo.jsx';
import TopNavItems from './TopNavItems.jsx';
import TopBarMiddle from './TopBarMiddle.jsx';


const TopBar = props => (
    <div className="navbar-topbar">
        <div className="navbar-topbar container">
            <Logo />
            <div className="navbar-top-right-container">

                <TopNavItems />
                <TopBarMiddle activeMenu={props.activeMenu} setActiveMenu={props.setActiveMenu}/>

            </div>
        </div>
    </div>
)

export default TopBar;