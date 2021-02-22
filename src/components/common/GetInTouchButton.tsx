import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import MailTo from './MailTo';

const StyledMailTo = styled(MailTo)`
  width: fit-content;
  text-align: center;
  font-size: 1.5rem;
  border: 2px solid ${(props) => props.theme.primaryColor};
  padding: 0.25rem 4rem;
  display: inline-block;
  color: ${(props) => props.theme.primaryColor};
  border-radius: 2rem;
  font-family: 'Montserrat', sans-serif;
  :hover {
    text-decoration: inherit;
    color: ${(props) => props.theme.bgColor};
    background-color: ${(props) => props.theme.primaryColor};
  }
`;

function GetInTouchButton() {
  return (
    <StyledMailTo emailUser='jterry94' emailHost='gmail.com'>
      Get in touch
    </StyledMailTo>
  );
}

export default GetInTouchButton;
