import React from 'react';
import Img from 'gatsby-image';
import { GatsbyImageFluidProps } from 'gatsby-image';
import styled from 'styled-components';

interface BookImageIconProps {
  name: string;
}

const StyledImg = styled(Img)`
  margin-top: 0.425vw;
  width: 12vw;
  display: inline-block;
  margin-bottom: 0.38rem;
`;

function BookImageIcon({
  name,
  ...props
}: GatsbyImageFluidProps & BookImageIconProps): JSX.Element {
  return <StyledImg {...props} alt={name} />;
}

export default BookImageIcon;
