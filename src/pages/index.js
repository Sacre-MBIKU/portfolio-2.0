/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/extensions */
import * as React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";

const IndexPage = ({ children, data }) => (
  <Layout>
    <Seo title="Home" />
    {/* {console.log("data", data.allStrapiMessages.edges[0].node.greeting)} */}
  </Layout>
);

export default IndexPage;

// export const query = graphql`
//   query MyQuery {
//     allStrapiMessages {
//       edges {
//         node {
//           greeting
//         }
//       }
//     }
//   }
// `;
