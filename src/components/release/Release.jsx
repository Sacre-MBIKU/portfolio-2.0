/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import * as React from "react";
import SectionTitle from "../shared/section_title/SectionTitle";
import "./release.scss";

const Release = ({ projects }) => (
  <section className="release-section" id="release">
    <SectionTitle title="REALISATIONS" />
    <div className="release-section__articles">
      <ul>
        {projects.map(({ node }, key) => (
          <li className="project" key={key}>
            <article className="project__contents">
              <img
                src={`http://localhost:1337${node.coverImage.url}`}
                alt={node.title}
                className="project__contents__img"
              />
              <div className="project__contents__description">
                <div className="description-header">
                  <p className="project-date">{node.date}</p>
                  <h5 className="plateform">{node.plateforme}</h5>
                </div>
                <h3 className="project-title">{node.title}</h3>
                <p className="project-details">{node.description}</p>
                <a href={node.projectURL}>Visiter</a>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Release;
