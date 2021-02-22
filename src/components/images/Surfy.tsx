import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import RecentProjectImage from '../home/recent-projects/RecentProjectImage';

function Surfy() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "Surfy.png" }) {
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
      projectUrl='https://getsurfy.org'
      projectName='Surfy'
      fluid={data.file.childImageSharp.fluid}
    />
  );
}

export default Surfy;
