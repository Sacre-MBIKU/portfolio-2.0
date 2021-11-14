import * as React from "react"
import PropTypes from "prop-types"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { FaBars } from "react-icons/fa"
import "./header.scss"

const Header = ({ siteTitle }) => (
  <header>
    <h2 className="logo">Sacré MBIKU</h2>
    <nav>
      <div className="humberger">
        <FaBars className="faBars" />
      </div>

      <ul>
        <li>
          <AnchorLink to="/#home">Accueil</AnchorLink>
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
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
