import * as React from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import "./home.scss";

const Home = () => (
  <main className="home-section">
    <section className="presantaion" id="home">
      <p>Salut! Je suis </p>
      <h2>Sacré MBIKU</h2>
      <h1>
        <span>Développeur Fullstack,</span>
        <span>UX/UI Designer et</span>
        <span>Formateur.</span>
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

export default Home;
