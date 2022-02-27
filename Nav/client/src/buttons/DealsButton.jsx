import React from 'react';
import DealsMenu from '../dropDownmenus/DealsMenu.jsx'
import LeftNavButton from './LeftNavButton.jsx';


class DealsButton extends React.Component {
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

        const activeClass = this.props.activeMenu === 'deals' ? "active" : "";

        return (
            <li>
                <LeftNavButton activeClass={activeClass} menu="deals" activeClass={activeClass} setActiveMenu={this.props.setActiveMenu} title="Deals" />
                <DealsMenu active={activeClass} />
            </li>
        )
    }
}


export default DealsButton;