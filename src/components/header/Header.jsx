import React, { useState } from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { FaBars, FaTimes } from "react-icons/fa";
import "./header.scss";

const Header = () => {
  const [isHamburgerVisible, setIsHamburgerVisible] = useState(true);
  return (
    <header>
      <h2 className="logo">Sacré MBIKU</h2>
      <nav>
        <div
          className="humberger"
          style={{ display: isHamburgerVisible ? "block" : "none" }}
        >
          <FaBars
            className="faBars"
            onClick={() => setIsHamburgerVisible(!isHamburgerVisible)}
          />
        </div>

        <div
          className="cross"
          style={{ display: !isHamburgerVisible ? "block" : "none" }}
        >
          <FaTimes
            className="faBars"
            onClick={() => setIsHamburgerVisible(!isHamburgerVisible)}
          />
        </div>

        <ul>
          <li>
            <AnchorLink className="activeLink" to="/#home">
              Accueil
            </AnchorLink>
          </li>

          <li>
            <AnchorLink to="/#release">Réalisations</AnchorLink>
          </li>
          <li>
            <AnchorLink to="/#techno">Technologies</AnchorLink>
          </li>
          <li>
            <AnchorLink to="/#contact">Contact</AnchorLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
