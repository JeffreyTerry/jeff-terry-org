import React from 'react';
import styled from 'styled-components';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import StarRating from './StarRating';
import { FluidObject } from 'gatsby-image';
import ExpertiseItemImageIcon from './ExpertiseItemImageIcon';

const ExpertiseItemCol = styled(Col)`
  display: flex;
  display: -webkit-flex;
  flex-wrap: wrap;
  margin-bottom: 3rem;
`;

const ExpertiseItemContainer = styled.div`
  width: 100%;
  text-align: center;
`;

const ExpertiseItemIcon = styled(FontAwesomeIcon)`
  margin-bottom: 0.4rem;

  /* The &&& makes this selector more specific so that it overrides 
  FontAwesome's default styling */
  &&& {
    font-size: 19vw;
  }

  @media (min-width: 576px) {
    &&& {
      font-size: 12.825vw;
    }
  }
  @media (min-width: 768px) {
    &&& {
      font-size: 9.55vw;
    }
  }
  @media (min-width: 992px) {
    &&& {
      font-size: 7.25vw;
    }
  }
`;

const ExpertiseItemName = styled.h3`
  margin-bottom: 0.5rem;
  font-size: 1.5rem;

  @media (min-width: 576px) {
    font-size: 2rem;
  }
`;

function ExpertiseItem({
  icon,
  logoImage,
  name,
  stars,
  iconColor,
}: {
  icon?: IconProp;
  logoImage?: FluidObject;
  iconColor?: string;
  name: string;
  stars: number;
}) {
  return (
    <ExpertiseItemCol xs={6} sm={4} md={3} xl={2}>
      <ExpertiseItemContainer>
        {icon && <ExpertiseItemIcon icon={icon} style={{ color: iconColor }} />}
        {logoImage && <ExpertiseItemImageIcon fluid={logoImage} name={name} />}
        <ExpertiseItemName>{name}</ExpertiseItemName>
        <StarRating stars={stars} />
      </ExpertiseItemContainer>
    </ExpertiseItemCol>
  );
}

export default ExpertiseItem;
