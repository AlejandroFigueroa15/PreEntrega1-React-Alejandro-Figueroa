import React from 'react'
import NavBarItems from "./NavBarItems";
import CartWidget from "../CartWidget/CartWidget";

const navBar = () => {
    const ecommerceLogo ="E-Commerce"
    const items = ["Inicio","Celulares","Accesorios","Contacto"];
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <p className="navbar-brand">{ecommerceLogo}</p>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <ul className = "navbar-nav">
                        {items.map((itemsNav) => (
                            <NavBarItems key={itemsNav} itemsNav={itemsNav}/>
                        ))}
                        
                    </ul>
                    
                </div>
            </div>
            <CartWidget/>
        </nav>

    );
};

export default navBar