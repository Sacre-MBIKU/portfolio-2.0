import * as React from "react"
import SectionTitle from "../shared/section_title/SectionTitle"
import "./technologies.scss"

const Technologies = () => (
  <section className="technologies-section" id="techno">
    <SectionTitle title="TECHNOLOGIES" />
    <div className="technologies-section__articles">
      <ul>
        <li className="techno">
          <article className="techno__contents">
            <img
              src={"/gatsby.png"}
              alt="allo-ciné"
              className="techno__contents__img"
            />
            <div className="techno__contents__description">
              <h6>Gatsby</h6>
            </div>
          </article>
        </li>

        <li className="techno">
          <article className="techno__contents">
            <img
              src={"/gatsby.png"}
              alt="allo-ciné"
              className="techno__contents__img"
            />
            <div className="techno__contents__description">
              <h6>Gatsby</h6>
            </div>
          </article>
        </li>

        <li className="techno">
          <article className="techno__contents">
            <img
              src={"/gatsby.png"}
              alt="allo-ciné"
              className="techno__contents__img"
            />
            <div className="techno__contents__description">
              <h6>Gatsby</h6>
            </div>
          </article>
        </li>

        <li className="techno">
          <article className="techno__contents">
            <img
              src={"/gatsby.png"}
              alt="allo-ciné"
              className="techno__contents__img"
            />
            <div className="techno__contents__description">
              <h6>Gatsby</h6>
            </div>
          </article>
        </li>
      </ul>
    </div>
  </section>
)

export default Technologies
