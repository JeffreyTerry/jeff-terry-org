import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import RecentProjectImage from '../common/RecentProjectImage';

function AskMeTutoring() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "AskMeTutoring.png" }) {
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
      projectUrl='https://askmetutoring.org'
      projectName='AskMe Tutoring'
      fluid={data.file.childImageSharp.fluid}
    />
  );
}

export default AskMeTutoring;
