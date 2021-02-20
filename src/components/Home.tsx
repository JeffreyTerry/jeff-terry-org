import React from 'react';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';
import Introduction from './home/Introduction';
import RecentProjects from './home/RecentProjects';
import Skills from './home/Skills';

const HomeContainer = styled(Container)`
  margin-top: 50px;
  color: ${(props) => props.theme.primaryColor};
  background-color: ${(props) => props.theme.bgColor};
`;

function Home() {
  return (
    <HomeContainer fluid>
      <Introduction />
      <RecentProjects />
      <Skills />
    </HomeContainer>
  );
}

export default Home;
