import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const StyledImg = styled(Img)`
  width: 100%;
`;

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

  return <StyledImg fluid={data.file.childImageSharp.fluid} alt='A photo of me' />;
}

export default Headshot;
