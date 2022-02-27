import React from 'react';
import ServicesMenu from '../dropDownmenus/ServicesMenu.jsx'
import LeftNavButton from './LeftNavButton.jsx';


class ServicesButton extends React.Component {
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

        const activeClass = this.props.activeMenu === 'services' ? "active" : "";

        return (
            <li>
                <LeftNavButton menu="services" activeClass={activeClass} setActiveMenu={this.props.setActiveMenu} title="Services" />
                <ServicesMenu active={activeClass} />
            </li>
        )
    }
}


export default ServicesButton;