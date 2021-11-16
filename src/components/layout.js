/* eslint-disable react/prop-types */
/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react";
// import PropTypes from "prop-types"
import "@fontsource/roboto-mono";

import Header from "./header/Header";
import "./layout.scss";
import Home from "./home/Home";
import Release from "./release/Release";
import Technologies from "./technologies/technologies";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";

const Layout = ({
  author,
  siteTitle,
  socialNetworks,
  bio,
  siteDescription,
  currentPost,
  skillDetails,
  projects
}) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `);

  return (
    <div className="container">
      <Header siteTitle={siteTitle || `Portfolio`} />
      <Home
        author={author}
        siteTitle={siteTitle}
        currentPost={currentPost}
        siteDescription={siteDescription}
      />
      <Release projects={projects} />
      <Technologies skillDetails={skillDetails} />
      <Contact />
      <Footer
        socialNetworks={socialNetworks}
        author={author}
        bio={bio}
        skillDetails={skillDetails}
      />
    </div>
  );
};

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default Layout;
