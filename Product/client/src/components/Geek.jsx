import React from 'react';
import badge from '../../assets/badge.png'
import star from '../../assets/star.png';

const Geek = (props) => {

    return (
     <div>
         <div className="display-geek-badge-container">
             <div className="display-geek-badge-image">
                 <img src="display-geek-badd-image-img" src={badge} height="30"/>
             </div>
             <div className="display-geek-badge-header">
                <div className="display-geek-badge-header-text">
                    Protect your product
                </div>
                <div className="display-geek-ratings-container">
                    <div className="display-geek-header-stars">
                        <img src={star} height="12"/>
                        <img src={star} height="12"/>
                        <img src={star} height="12"/>
                        <img src={star} height="12"/>
                        <img src={star} height="12"/>
                       
                    </div>
                    <div className="display-geek-header-review-count">(378)</div>
                </div>
             </div>
         </div>
     </div>
    )
}

export default Geek;