import React from 'react';
import MenuBox from './MenuBox.jsx'
import MenuBoxSeperator from './MenuBoxSeperator.jsx';
import CloseItem from './CloseItem.jsx';


const DealsMenu = props => (
            <div className={"menu-box-left menu-products "+props.active} style={{"left": "263px"}}>

                <div className="flyout-animation">
                    <nav>
                        <div className="flyout-content">
                            <ul className="header-menu header-menu-visible">
                                <MenuBox items={["Top Deals", "Deal of the Day", "Member Offers", "Student Deals", "Best Buy Outlet", "Apple Shopping Event"]} />
                                <MenuBoxSeperator />
                                <MenuBox header="Deals by Category" items={["TVs", "Laptops & Computers", "Tablets & E Readers", "Video Games & VR", "HeadPhones", "Cell Phones", "Home Theatre", "Smart Home", "Drones, Toys", "Cameras", "Wearable Technology", "Major Appliances"
                                , "Small Appliances", "Movies, TV shows & Music", "Printers & Home Office", "Luggage & Travel", "Car Electronics & GPS", "Best Buy for Business", "Sales & Promotions", "Clearance & More" ]} />
                                <MenuBoxSeperator />
                                <MenuBox header="Specialty Shops" items={["Magnolia Audio & Video", "Pacific Kitchen & Home", "Camera Experience Shop"]} />
                                <CloseItem />

                            </ul>
                        </div>
                    </nav>
                </div>

            </div>

        )

export default DealsMenu;

