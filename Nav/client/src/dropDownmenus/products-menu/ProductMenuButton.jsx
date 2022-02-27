import React from 'react';


const ProductMenuButton = props => (
    <li className="item-parent-menu">
        <button>
            {props.title}
            <div className="caret-right">
                <svg width="25" height="25" viewBox="0 0 32 32" fill="#0046be">
                    <path d="M11.385 29.319a.979.979 0 01-.78-1.566l8.854-11.75-8.854-11.748a.979.979 0 011.562-1.177l9.296 12.337a.98.98 0 010 1.177L12.167 28.93a.977.977 0 01-.782.389">

                    </path>
                </svg>
            </div>
        </button>
    </li>
)


export default ProductMenuButton;
