import React from 'react';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';
import Introduction from './home/Introduction';
import SampleWork from './home/SampleWork';

const HomeContainer = styled(Container)`
  margin-top: 50px;
  color: ${(props) => props.theme.primaryColor};
  background-color: ${(props) => props.theme.bgColor};
`;

function Home() {
  return (
    <HomeContainer fluid>
      <Introduction />
      <SampleWork />
    </HomeContainer>
  );
}

export default Home;
