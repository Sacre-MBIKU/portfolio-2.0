import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
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
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/">Accueil</Link>
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
