import React from 'react';
import MenuBox from './MenuBox.jsx'
import MenuBoxSeperator from './MenuBoxSeperator.jsx';
import CloseItem from './CloseItem.jsx';


const BrandsMenu = props => (
            <div className={"menu-box-left menu-products "+props.active} style={{"left": "150px"}}>

                <div className="flyout-animation">
                    <nav>
                        <div className="flyout-content">
                            <ul className="header-menu header-menu-visible">
                                <MenuBox header="Brand Shops" items={["Apple", "Samsung", "Microsoft", "Sony", "Intel"]} />
                                <MenuBoxSeperator />
                                <MenuBox header="Featured Brands" items={["Insignia", "Lenovo", "LG", "Nikon", "Bose", "Canon", "Epson", "GoPro", "HP", "All Brands"]} />
                                <MenuBoxSeperator />
                                <MenuBox header="Specialty Shops" items={["Magnolia Audio & Video", "Pacific Kitchen & Home", "Camera Experience Shop"]} />
                                <CloseItem />

                            </ul>
                        </div>
                    </nav>
                </div>

            </div>

        )

export default BrandsMenu;

