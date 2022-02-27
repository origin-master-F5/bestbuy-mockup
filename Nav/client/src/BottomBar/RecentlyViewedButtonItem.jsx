import React from 'react';
import RightListButton from './RightListButton.jsx';
import RecentlyViewedMenu from '../dropDownmenus/RecentlyViewedMenu/RecentlyViewedMenu.jsx'

const RecentlyViewedButtonItem = props => (
    <li>
        <RightListButton title="Recently Viewed" menu='recentlyviewed' setActiveMenu={props.setActiveMenu}/>
        {props.activeMenu === 'recentlyviewed' ? <RecentlyViewedMenu /> : null }
    </li>
)

export default RecentlyViewedButtonItem;