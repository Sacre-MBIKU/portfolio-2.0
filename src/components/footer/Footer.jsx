/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Link } from "gatsby";
import React from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import "./footer.scss";

const Footer = ({ author, bio, socialNetworks, skillDetails }) => {
  return (
    <footer className="footer-section">
      <section className="footer__main">
        <div className="footer__main__profile">
          <div className="logo">{author}</div>
          <strong className="bio">{bio}</strong>

          <ul className="social-media">
            {socialNetworks.map(({ icon }, key) => (
              <li key={key}>
                <a href="https://github.com/Sacre-MBIKU" rel="noreferrer">
                  <img
                    src={`http://localhost:1337${icon.url}`}
                    alt={icon.alternativeText}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav className="footer-navigation">
          <strong>Liens</strong>
          <ul>
            <li>
              <AnchorLink to="/#home">Accueil</AnchorLink>
            </li>
            <li>
              <AnchorLink to="/#release">Réalisations</AnchorLink>
            </li>
            <li>
              <AnchorLink to="/#techno">Compétences</AnchorLink>
            </li>
            <li>
              <AnchorLink to="/#contact">Contact</AnchorLink>
            </li>
          </ul>
        </nav>

        <ul className="services">
          <strong>Services</strong>
          {skillDetails.map(({ node }, key) => (
            <li key={key}>
              <h4>{node.title}</h4>
            </li>
          ))}
        </ul>

        <div className="address">
          <strong>Contacts</strong>
          <address>
            <span>
              16/A Eléphants, 7ème Rue, Résidentiel, Limete, Kinshasa, RDC.
            </span>
            <a href="tel:+243823311664">+243823311664</a>
            <a href="mailto:sajombiku@gmail.com">sajombiku@gmail.com</a>
          </address>
        </div>
      </section>
      <p className="footer__copyright">
        <AnchorLink to="/#home">
          <img src="./homeLink.png" alt="link arrow icon" />
        </AnchorLink>
        <span>2021, All Right Reserve. Sacré MBIKU MUKWAKANI</span>
      </p>
    </footer>
  );
};

export default Footer;
