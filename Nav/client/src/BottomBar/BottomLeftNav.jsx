import React from 'react';
import LeftListItem from './LeftListItem.jsx'
import ProductsButton from '../buttons/ProductsButton.jsx';
import BrandsButton from '../buttons/BrandsButton.jsx';
import DealsButton from '../buttons/DealsButton.jsx';
import ServicesButton from '../buttons/ServicesButton.jsx';

const BottomLeftNav = props => (
    <nav className="leftnavigation">
        <ul className="itemlist">
            <ProductsButton  activeMenu={props.activeMenu} setActiveMenu={props.setActiveMenu}/>
            <BrandsButton activeMenu={props.activeMenu} setActiveMenu={props.setActiveMenu}/>
            <DealsButton activeMenu={props.activeMenu} setActiveMenu={props.setActiveMenu}/>
            <ServicesButton activeMenu={props.activeMenu} setActiveMenu={props.setActiveMenu}/>
        </ul>
    </nav>
)

export default BottomLeftNav;