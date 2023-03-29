import React from "react";
import NavBarItem from "../NavBarItem/NavBarItem";
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Shop
        </a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <NavBarItem navItem="Home" />
            <NavBarItem navItem="Products" />
            <NavBarItem navItem="Contact" />
          </ul>
        </div>
        <div className="collapse navbar-collapse">
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
