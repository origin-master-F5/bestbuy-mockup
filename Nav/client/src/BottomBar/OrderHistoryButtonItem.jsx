import React from 'react';
import RightListButton from './RightListButton.jsx';
import OrderStatusMenu from '../dropDownmenus/order-status-menu/OrderStatusMenu.jsx';

const OrderHistoryButtonItem = props => (
    <li>
        <RightListButton title="Order Status" menu='orderstatus' setActiveMenu={props.setActiveMenu}/>
        {props.activeMenu === 'orderstatus' ? <OrderStatusMenu /> : null }
    </li>
)

export default OrderHistoryButtonItem;