import React from 'react';
import Img from 'gatsby-image';
import { GatsbyImageFluidProps } from 'gatsby-image';
import styled from 'styled-components';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

interface RecentProjectProps {
  projectUrl: string;
  projectName: string;
}

const StyledImg = styled(Img)`
  cursor: pointer;
`;

function RecentProjectImage({
  projectUrl,
  projectName,
  ...props
}: GatsbyImageFluidProps & RecentProjectProps): JSX.Element {
  return (
    <OutboundLink href={projectUrl}>
      <StyledImg {...props} alt={`A screenshot of ${projectName}`} />
    </OutboundLink>
  );
}

export default RecentProjectImage;
