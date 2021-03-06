import React from 'react';
import CompareFooter from './CompareFooter.jsx';
import box from '../../assets/stroke_box.png'
import stroke_ribbon from '../../assets/stroke_ribbon.png'
import fill_ribbon from '../../assets/fill_ribbon.png'


class Compare extends React.Component {
constructor(props) {
    super(props);
    this.state = {
      changeWhite: false,
      ribbonWhite: true,
      showComparison: false
    };
    this.changeBoxColorWhite = this.changeBoxColorWhite.bind(this);
    this.changeBoxColorGrey = this.changeBoxColorGrey.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.showModal = this.showModal.bind(this);
    this.changeRibbon = this.changeRibbon.bind(this);
}

changeBoxColorWhite() {
    this.setState({
      changeWhite: true
    })
  }

  changeBoxColorGrey() {
    this.setState({
       changeWhite: false
    })
  }

  handleToggle() {
    let answer = this.state.showComparison ? false : true;
    this.setState({
        showComparison: answer
    })
  }

  showModal() {
    if (this.state.showComparison) {
        return (
            <div className="display-compare-check">
               <i className="display-geekplan-check ion-checkmark" ></i>
            </div>
        )
    }
  }

  changeRibbon() {
      if (this.state.ribbonWhite) {
          this.setState({
              ribbonWhite: false
          })
      }
  }

 render() {
    return (
        <div>
          <div className="display-compare-box-container">

              <div className="display-compare-toggle-box" onMouseOver={this.changeBoxColorWhite} onMouseLeave={this.changeBoxColorGrey} onClick={this.handleToggle}> {this.showModal()}
                <img className="display-compare-box" src={box} height="20" />
               </div>
               <div className="display-compare-box-text" onMouseOver={this.changeBoxColorWhite} onMouseLeave={this.changeBoxColorGrey} onClick={this.handleToggle}>Compare</div>
              
              
                <img className="display-compare-save-box" src={this.state.ribbonWhite ? stroke_ribbon : fill_ribbon} height="18" onClick={this.changeRibbon}/>
                <span className="display-compare-save-text" >Saved</span>
          </div>
           <div>
             <div className={this.state.showComparison ? "display-compare-footer" : "display-compare-footer-none"}>
               <CompareFooter image={this.props.image} item_name={this.props.item_name} toggle={this.handleToggle}/>
            </div>
           </div>
        </div>
    )
 }
}

export default Compare;