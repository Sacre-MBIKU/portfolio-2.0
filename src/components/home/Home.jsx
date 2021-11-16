/* eslint-disable react/prop-types */
import * as React from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import "./home.scss";

const Home = ({ author, siteTitle, currentPost, siteDescription }) => {
  const portfolioAuthor = author;
  return (
    <main className="home-section">
      <section className="presantaion" id="home">
        <p>Salut! Je suis </p>
        <h2>{portfolioAuthor}</h2>
        <h1>
          <span>{author}</span>
          <span>{siteDescription}</span>
          <span>{siteTitle}</span>
          <span>{currentPost}</span>
        </h1>
        <ul className="anchors">
          <li>
            <AnchorLink to="/#contact" className="anchors__contact">
              Contact
            </AnchorLink>
          </li>
          <li>
            <AnchorLink to="/#release" className="anchors__release">
              Réalisations
            </AnchorLink>
          </li>
        </ul>
      </section>

      <div className="imageDescription">
        <img src="/fullstack-developer.png" alt="fullstack-developer" />
      </div>
    </main>
  );
};
export default Home;
