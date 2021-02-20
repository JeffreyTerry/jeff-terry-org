import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

function Headshot() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "Headshot.png" }) {
        childImageSharp {
          fluid(maxWidth: 200, maxHeight: 200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return <Img fluid={data.file.childImageSharp.fluid} alt='A photo of me' />;
}

export default Headshot;
