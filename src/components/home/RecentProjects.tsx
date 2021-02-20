import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';

export const SectionHeader = styled.h2`
  font-size: 4rem;
  margin-top: 3.5rem;
  margin-left: 4rem;
  margin-bottom: 60px;
`;

const RecentProjectsRow = styled(Row)`
  height: 500px;
  background-color: ${(props) => props.theme.bgColorSecondary};
`;

function RecentProjects() {
  return (
    <RecentProjectsRow>
      <Col xs={{ span: 10, offset: 1 }}>
        <Row>
          <Col xs={12}>
            <SectionHeader>Recent Projects</SectionHeader>
          </Col>
        </Row>
      </Col>
    </RecentProjectsRow>
  );
}

export default RecentProjects;
