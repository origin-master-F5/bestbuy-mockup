import React from 'react';
import BrandsMenu from '../dropDownmenus/BrandsMenu.jsx'
import LeftNavButton from './LeftNavButton.jsx';


class BrandsButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        }
    }

    onClick = event => {
        this.setState({
            active: !this.state.active
        });
    }

    render() {

        const activeClass = this.props.activeMenu === 'brands' ? "active" : "";

        return (
            <li>
                <LeftNavButton activeClass={activeClass} menu="brands" activeClass={activeClass} setActiveMenu={this.props.setActiveMenu} title="Brands" />
                <BrandsMenu active={activeClass} />
            </li>
        )
    }
}


export default BrandsButton;