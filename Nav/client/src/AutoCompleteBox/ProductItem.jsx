import React from 'react';

const ProductItem = props => (

            <li>
                <a className="navbar-relatedproduct-image">
                    <img src={props.item.image} className="navbar-search-img" />
                </a>
                <div className="navbar-relatedproduct-detail">
                    <a>
                        <span className="navbar-relatedproduct-title">
                            {props.item.name} - {props.item.console}
                        </span>
                    </a>

                    <a>
                        <div className="navbar-rating-container">
                            <span className="navbar-ministars" alt="84.00%">
                                <span className="navbar-ministars-unfilled"></span>
                                <span className="navbar-ministars-filled" style={{ "width": `${(parseFloat(props.item.rating) / 5.0)*100}%` }}></span>
                            </span>
                            <span className="navbar-rating-text">{props.item.rating}</span>

                        </div>

                    </a>
                </div>
            </li>

)

export default ProductItem;