import React from "react";

function Header() {
  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <a href="!#" className="brand-logo">
            React shop
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a>News</a>
            </li>
            <li>
              <a>Toys</a>
            </li>
            <li>
              <a>Pays</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
