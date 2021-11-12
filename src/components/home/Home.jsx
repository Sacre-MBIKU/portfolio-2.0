import * as React from "react"
import { Link } from "gatsby"
import "./home.scss"

const Home = () => (
  <main className="home-section">
    <section className="presantaion">
      <p>Salut! Je suis </p>
      <h2>Sacré MBIKU</h2>
      <h1>
        <span>Développeur Fullstack,</span>
        <span>UX/UI Designer et</span>
        <span>Formateur.</span>
      </h1>
      <ul className="anchors">
        <li>
          <Link to="/" className="anchors__contact">
            Contact
          </Link>
        </li>
        <li>
          <Link to="/" className="anchors__release">
            Release
          </Link>
        </li>
      </ul>
    </section>

    <div className="imageDescription">
      <img src={"/fullstack-developer.png"} alt="fullstack-developer" />
    </div>
  </main>
)

export default Home
