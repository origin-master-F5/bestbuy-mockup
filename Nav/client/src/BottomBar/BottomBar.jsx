import React from 'react';
import BottomRightNav from './BottomRightNav.jsx';
import BottomLeftNav from './BottomLeftNav.jsx';

const BottomBar = props => (
    <div className="navbar-bottombar">
        <div className="container">
            <BottomLeftNav activeMenu={props.activeMenu} setActiveMenu={props.setActiveMenu} />
            <BottomRightNav activeMenu={props.activeMenu} setActiveMenu={props.setActiveMenu} />
        </div>
        

    </div>

)

export default BottomBar;