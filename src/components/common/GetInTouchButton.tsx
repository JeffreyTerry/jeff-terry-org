import React from 'react';
import Button from './Button';
import styled from 'styled-components';

const StyledButton = styled(Button)`
  width: fit-content;
  text-align: center;
  font-size: 1.5rem;
  border: 2px solid ${(props) => props.theme.primaryColor};
  padding: 0.25rem 4rem;
  color: ${(props) => props.theme.primaryColor};
  border-radius: 2rem;
  :hover {
    color: ${(props) => props.theme.bgColor};
    background-color: ${(props) => props.theme.primaryColor};
  }
`;

function GetInTouchButton() {
  return <StyledButton>Get in touch</StyledButton>;
}

export default GetInTouchButton;
