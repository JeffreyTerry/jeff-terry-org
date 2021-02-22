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
  /* cursor: pointer; */
`;

const ImgFigure = styled.figure`
  position: relative;
`;

const ImgFigCaption = styled.figcaption`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  color: ${(props) => props.theme.bgColor};
  z-index: 1;
  text-align: center;
  transition: all 0.3s ease-out;
  * {
    opacity: 0;
  }
  padding-top: calc(50% - 6.4rem);
  :hover {
    padding-top: calc(50% - 6.1rem);
    background-color: rgba(45, 114, 143, 0.9);
  }
  :hover * {
    opacity: 1;
  }
  /* Modify the margin-bottom for the CaptionProjectName to 
  make it look like the button comes up from the bottom of
  the caption */
  h3 {
    transition: margin-bottom 0.3s ease-out;
    margin-bottom: 1.3rem;
  }
  :hover h3 {
    margin-bottom: 0.7rem;
  }
`;

const CaptionProjectName = styled.h3`
  font-size: 2.4rem;
  color: ${(props) => props.theme.bgColor};
  cursor: default;
`;

const CaptionViewProjectButton = styled(OutboundLink)`
  color: ${(props) => props.theme.bgColor};
  border: 2px solid ${(props) => props.theme.bgColor};
  border-radius: 2rem;
  font-size: 1.3rem;
  display: inline-block;
  padding: 0.25rem 2.5rem;
  width: fit-content;
  font-family: 'Montserrat', sans-serif;
  text-decoration: none;
  :hover {
    text-decoration: inherit;
    color: ${(props) => props.theme.primaryColor};
    background-color: ${(props) => props.theme.bgColor};
  }
`;

function RecentProjectImage({
  projectUrl,
  projectName,
  ...props
}: GatsbyImageFluidProps & RecentProjectProps): JSX.Element {
  return (
    <ImgFigure>
      <StyledImg {...props} alt={`A screenshot of ${projectName}`} />
      <ImgFigCaption>
        <CaptionProjectName>{projectName}</CaptionProjectName>
        <CaptionViewProjectButton href={projectUrl}>Try It Out!</CaptionViewProjectButton>
      </ImgFigCaption>
    </ImgFigure>
  );
}

export default RecentProjectImage;
