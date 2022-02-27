import React from 'react';
import MenuBox from './MenuBox.jsx'
import MenuBoxSeperator from './MenuBoxSeperator.jsx';
import CloseItem from './CloseItem.jsx';


const ServicesMenu = props => (
            <div className={"menu-box-left menu-products "+props.active} style={{"left": "363px"}}>

                <div className="flyout-animation">
                    <nav>
                        <div className="flyout-content">
                            <ul className="header-menu header-menu-visible">
                                <MenuBox header="Get Support" items={["Chat With a Geek Squad Agent", "Schedule a Service", "Check Repair Status", "Free Virtual Consultation", "Customer Service"]} />
                                <MenuBoxSeperator />
                                <MenuBox header="Protection & Support Plans" items={["Total Tech Support Membership", "Geek Squad Protection", "AppleCare Protection & AppleCare+", "24/7 Membership Plans"]} />
                                <MenuBoxSeperator />
                                <MenuBox header="Additional Services" items={["Tech Tips", "Trade In Your Device", "Haul Away & Recycling", "Find Replacement Parts"]} />
                                <CloseItem />
                            </ul>
                        </div>
                    </nav>
                </div>

            </div>

        )

export default ServicesMenu;

