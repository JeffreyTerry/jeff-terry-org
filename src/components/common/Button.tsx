import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: unset;
  border: unset;
  padding: unset;
`;

function Button(props: any) {
  return <StyledButton {...props} />;
}

export default Button;
