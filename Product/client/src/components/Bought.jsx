import React from 'react';

const Bought = props => {
    return (
        <div className="display-bought-shop-product-carousel">
            <div className="display-bought-shop-product-carousel-mini">
                <button className="display-bought-shop-product-button">
                    {props.category === "Nintendo Switch" && <img className="display-bought-shop-product-image" src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6486/6486410_sd.jpg;maxHeight=136;maxWidth=200" />}
                    {props.category === "PlayStation 4" && <img className="display-bought-shop-product-image" src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6486/6486410_sd.jpg;maxHeight=136;maxWidth=200" />}
                </button>
            </div>
        </div>
    )
}

export default Bought;