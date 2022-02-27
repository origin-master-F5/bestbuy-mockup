import React from 'react';


const ItemCard = props => (
    <div className="navbar-sh-item-card">
        <h2 className="sr-only">Last 7 days</h2>
        <div className="navbar-sh-product-card">
            <a className="navbar-sh-image-container">
                <img src="https://origin-master.s3-us-west-1.amazonaws.com/game_image.jpg" />
            </a>
            <div className="navbar-sh-card-main">
                <h3 class="navbar-sh-card-title">Added to Cart</h3>
                <a class="sh-navbar-product-action-link" href="#" style={{ "fontSize": "13px" }}>
                    Mortal Kombat 11 Standard Edition - PlayStation 4
                </a>

                <div className="navbar-sh-ratings-block">
                    <a>
                        <div className="navbar-rating-container">
                            <span className="navbar-ministars" alt="84.00%">
                                <span className="navbar-ministars-unfilled"></span>
                                <span className="navbar-ministars-filled" style={{ "width": `80%` }}></span>
                            </span>
                            <span className="navbar-rating-text">4.5</span>
                            <span class="c-total-reviews"> (1594)</span>
                        </div>
                    </a>
                </div>

                <div className="navbar-sh-price">
                    $29.99
                </div>

                <div className="navbar-sh-add-block">
                    <button type="button" className="navbar-btn navbar-btn-primary" style={{ "padding": "0 8px" }}>
                        <img style={{"width": "18px", "padding-right": "10px"}} src="https://origin-master.s3-us-west-1.amazonaws.com/shopping-cart.png" className="ficon-cart" />
                Add to Cart
                </button>
                <a class="navbar-see-more-btn" href="#">See related items</a>
                </div>

            </div>
        </div>
        <button className="navbar-sh-item-remove">
            <span class="navbar-sh-close-icon"></span>
        </button>

        
    </div>
)


export default ItemCard;
