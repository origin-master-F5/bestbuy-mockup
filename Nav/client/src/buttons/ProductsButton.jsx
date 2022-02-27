import React from 'react';
import ProductMenu from '../dropDownmenus/products-menu/ProductMenu.jsx'
import LeftNavButton from './LeftNavButton.jsx';


class ProductsButton extends React.Component {
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

        const activeClass = this.props.activeMenu === 'products' ? "active" : "";

        return (
            <li>
                <LeftNavButton menu="products" activeClass={activeClass} setActiveMenu={this.props.setActiveMenu} title="Products" />
                <ProductMenu active={activeClass} />
            </li>
        )
    }
}


export default ProductsButton;