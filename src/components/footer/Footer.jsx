/* eslint-disable no-unused-vars */
import { Link } from "gatsby";
import React from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer-section">
      <section className="footer__main">
        <div className="footer__main__profile">
          <div className="logo">Sacré MBIKU</div>
          <strong className="bio">
            Ayant une bonne maitrise de la méthodologie agile, soutenue par une
            forte créativité nous apportons une transformation digitale adéquate
            à vos projets.
          </strong>

          <ul className="social-media">
            <li>
              <a href="https://github.com/Sacre-MBIKU" rel="noreferrer">
                <img src="./github.svg" alt="github compt" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/sacrembiku/" rel="noreferrer">
                <img src="./insta.svg" alt="social-media" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/sacr%C3%A9-joseph-mbiku-2ab6071b4/"
                rel="noreferrer"
              >
                <img src="./linkedin.svg" alt="social-media" />
              </a>
            </li>
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
              <AnchorLink to="/#techno">Technologies</AnchorLink>
            </li>
            <li>
              <AnchorLink to="/#contact">Contact</AnchorLink>
            </li>
          </ul>
        </nav>

        <ul className="services">
          <strong>Services</strong>
          <li>
            <h4>UX/UI</h4>
          </li>
          <li>
            <h4>Frontend</h4>
          </li>
          <li>
            <h4>Backend</h4>
          </li>
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
