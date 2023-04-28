import React from 'react'
const navBarItems = (props) => {

    return (
        <li className="nav-item">
            <p className="nav-link active" href="#">{props.itemsNav}</p>
        </li>
    );
};

export default navBarItems