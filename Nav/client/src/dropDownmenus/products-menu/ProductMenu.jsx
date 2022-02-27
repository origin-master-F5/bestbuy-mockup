import React from 'react';
import CloseItem from '../CloseItem.jsx';
import ProductMenuButton from './ProductMenuButton.jsx';
import MenuBox from '.././MenuBox.jsx'
import MenuBoxSeperator from '.././MenuBoxSeperator.jsx';


class ProductMenu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={"menu-box-left menu-products " + this.props.active}>

                <div className="flyout-animation">
                    <nav>
                        <div className="flyout-content">
                            <ul className="header-menu header-menu-visible">
                                <li className="items-with-heading">
                                    <h3 className="header">All Categories</h3>
                                    <ul>
                                        <ProductMenuButton title="Appliances" />
                                        <ProductMenuButton title="TV & Home Theater" />
                                        <ProductMenuButton title="Computers & Tablets" />
                                        <ProductMenuButton title="Cameras & Camcorders" />
                                        <ProductMenuButton title="Cell Phones" />
                                        <ProductMenuButton title="Audio" />
                                        <ProductMenuButton title="Video Games" />
                                        <ProductMenuButton title="Movies & Music" />
                                        <ProductMenuButton title="Car Electronics & GPS" />
                                        <ProductMenuButton title="Wearable Technology" />
                                        <ProductMenuButton title="Health, Fitness & Personal Care" />
                                        <ProductMenuButton title="Home, Furniture & Office" />
                                        <ProductMenuButton title="Smart Home, Security & Wi Fi" />
                                        <ProductMenuButton title="Drones, Toys & Collectibles" />
                                        <ProductMenuButton title="Best Buy Outlet" />
                                    </ul>
                                </li>

                                <MenuBoxSeperator />

                                <MenuBox header="Featured" items={["Be-at-Home-Essentials", "Latest from Apple", "Xbox Series X", "Dyson Corrale Hair Straightener", "Women's History Month", "PlayStation 5"]} />

                                <CloseItem />
                            </ul>
                        </div>
                    </nav>
                </div>

            </div>

        )
    }

}

export default ProductMenu;

