import React from 'react';
import SearchItem from './SearchItem.jsx';
import ProductItem from './ProductItem.jsx';

const AutoCompleteBox = props => (
    <div style={{ "position": "absolute" }}>
        <div className="navbar-autocompletebox-container" style={{ "width": "706px" }}>
            <div className="navbar-autocompletebox-split-container navbar-autocompletebox-results-container" >
                <ul>
                    {props.items.map(item => <SearchItem text={item.name} search={props.search} setProductFilter={props.setProductFilter}/>)}
                </ul>
            </div>
            <div className="navbar-autocompletebox-split-container navbar-autocompletebox-products-container">
                <ul>
                    {props.relatedItems.map(item => <ProductItem item={item} />)}
                </ul>
            </div>
        </div>
    </div>
)

export default AutoCompleteBox;