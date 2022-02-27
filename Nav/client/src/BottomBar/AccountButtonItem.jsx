import React from 'react';
import AccountButton from '../buttons/AccountButton.jsx';
import AccountMenu from '../dropDownmenus/AccountMenu.jsx'

const AccountButtonItem = props => (
    <li>
        <AccountButton menu='account' setActiveMenu={props.setActiveMenu}/>
        {props.activeMenu === 'account' ? <AccountMenu /> : null }
    </li>
)

export default AccountButtonItem;