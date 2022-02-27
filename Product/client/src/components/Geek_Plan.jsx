import React from 'react';
import box from '../../assets/stroke_box.png'

class Geek_Plan extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
       changeWhite: false,
       toggleYes: true
      }
    this.changeBoxColorWhite = this.changeBoxColorWhite.bind(this);
    this.changeBoxColorGrey = this.changeBoxColorGrey.bind(this);
    this.toggleBox = this.toggleBox.bind(this);
    this.toggleCheckbox = this.toggleCheckbox.bind(this);
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

    toggleBox(){
    let answer = this.state.toggleYes ? false : true;
      this.setState({
         toggleYes: answer
      })
    }

    toggleCheckbox() {
     if (!this.state.toggleYes) {
        return (
         <div>
             <i className="display-geekplan-check ion-checkmark" ></i>
         </div>
        )
     }
    }

    render() {
      var price = this.props.geek_squad_price;
      var payment = (price * .041).toFixed(2);
        return (
            <div>
              <div className="display-geekplan-container">
                <div className="display-geekplan-box" onMouseOver={this.changeBoxColorWhite} onMouseLeave={this.changeBoxColorGrey} onClick={this.toggleBox}>
                     <div className="display-geekplan-image">
                      {this.toggleCheckbox()}
                        <img src={box} height="20" />  
                     </div>
                  
                       <div className="display-geekplan-text">2-Year Geek Squad Product Replacement</div></div>
                  
                    <div className="display-geekplan-subcontainer">
                     <div className="display-geekplan-text-price">${price}</div>
                     <div className="display-geekplan-text-price-monthly">About ${payment}/mo.</div>
                  </div>
            </div>
            <div className="display-geekplan-text-learnmore">Learn more</div>
        </div>
        )

    }

}


export default Geek_Plan;