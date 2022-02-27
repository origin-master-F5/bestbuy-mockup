import React from 'react';
import TopBar from './TopBar/TopBar.jsx';
import BottomBar from './BottomBar/BottomBar.jsx';
import OverlayBackdrop from './OverlayBackdrop.jsx';


class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMenu: ''
    }
  }

  setActiveMenu = name => {
    this.setState({
      activeMenu: name
    })
  }


  render() {
    return (
      <div className="navbar" onClick={() => {this.state.activeMenu ? this.setActiveMenu('') : null}}>
        <TopBar activeMenu={this.state.activeMenu} setActiveMenu={this.setActiveMenu} />
        <BottomBar activeMenu={this.state.activeMenu} setActiveMenu={this.setActiveMenu}/>
        { this.state.activeMenu ? <OverlayBackdrop setActiveMenu={this.setActiveMenu}/> : null }

      </div>

    )
  }

}

export default NavBar;