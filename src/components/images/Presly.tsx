import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import RecentProjectImage from '../common/RecentProjectImage';

function Presly() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "Presly.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <RecentProjectImage
      projectUrl='https://presly.org'
      projectName='Presly'
      fluid={data.file.childImageSharp.fluid}
    />
  );
}

export default Presly;
