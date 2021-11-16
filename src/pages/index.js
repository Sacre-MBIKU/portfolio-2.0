/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/extensions */
import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";

const IndexPage = ({ children, data }) => {
  const author = data.strapiAbout.seo.description;
  const { bio } = data.strapiHome;
  const { siteTitle, siteDescription, currentPost, socialNetworks } =
    data.strapiGlobal;

  return (
    <Layout
      author={author}
      siteTitle={siteTitle}
      socialNetworks={socialNetworks}
      bio={bio}
      siteDescription={siteDescription}
      currentPost={currentPost}
    >
      <Seo title={siteTitle} />
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query MyQuery {
    strapiAbout {
      seo {
        description
      }
    }
    strapiGlobal {
      siteName
      siteDescription
      currentPost
      socialNetworks {
        title
        icon {
          url
          alternativeText
        }
      }
    }
    strapiHome {
      seo {
        description
      }
      bio
    }
  }
`;
