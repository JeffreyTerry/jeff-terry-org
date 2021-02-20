import React from 'react';
import Img from 'gatsby-image';
import { GatsbyImageFluidProps } from 'gatsby-image';
import styled from 'styled-components';

interface ExpertiseItemImageIconProps {
  name: string;
}

const StyledImg = styled(Img)`
  margin-top: 0.425vw;
  width: 6.38vw;
  display: inline-block;
  margin-bottom: 0.38rem;
`;

function ExpertiseItemImageIcon({
  name,
  ...props
}: GatsbyImageFluidProps & ExpertiseItemImageIconProps): JSX.Element {
  return <StyledImg {...props} alt={`The ${name} logo`} />;
}

export default ExpertiseItemImageIcon;
