import React from "react";

const NavBarItem = (props) => {
  const { navItem } = props;
  return (
    <li className="nav-item">
      <a className="nav-link" href="/">
        {navItem}
      </a>
    </li>
  );
};

export default NavBarItem;
