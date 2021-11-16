/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import * as React from "react";
import SectionTitle from "../shared/section_title/SectionTitle";
import "./technologies.scss";

const Technologies = ({ skillDetails }) => (
  <section className="technologies-section" id="techno">
    <SectionTitle title="COMPETENCES" />
    <div className="technologies-section__articles">
      <ul>
        {skillDetails.map(({ node }, key) => (
          <li key={key} className="techno">
            <article className="techno__contents">
              <img
                src={`http://localhost:1337${node.coverImage[0].url}`}
                alt={node.title}
                className="techno__contents__img"
              />
              <div className="techno__contents__description">
                <h6>{node.title}</h6>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Technologies;
