import React from 'react';

const SearchItem = props => (
    <li>
        <a>
            <span>
                <span>{props.search}</span>
                <span className="navbar-autocomplete-text" style={{ "font-weight": "bold" }}>{props.text.toLowerCase().replace(props.search, '')}</span>
            </span>
        </a>
    </li>
)

export default SearchItem;