import React from 'react';



const LeftNavButton = props => (

    <button className={"btn-unstyled menuHeader " + props.activeClass} onClick={() => {props.setActiveMenu(props.menu)}}>
        {props.title}
        <div className="drop-arrow-icon ">
            <svg width="12" height="10" viewBox="0 0 32 32" fill="#fff">
                <path d="M16.046 21.647a.974.974 0 01-.588-.197L3.12 12.153a.98.98 0 011.177-1.562l11.75 8.854 11.748-8.854a.978.978 0 011.178 1.562L16.635 21.45a.974.974 0 01-.589.197">

                </path>
            </svg>
        </div>
    </button>
)


export default LeftNavButton;

