import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
import Presly from '../images/Presly';
import Surfy from '../images/Surfy';
import AskMeTutoring from '../images/AskMeTutoring';
import { SectionHeader } from '../styled/components';

const RecentProjectsRow = styled(Row)`
  background-color: ${(props) => props.theme.bgColorSecondary};
  padding-bottom: 60px;
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
        <Row>
          <Col xs={12} md={6} xl={4} className='mb-5'>
            <Surfy />
          </Col>
          <Col xs={12} md={6} xl={4} className='mb-5'>
            <Presly />
          </Col>
          <Col xs={12} md={6} xl={4} className='mb-5'>
            <AskMeTutoring />
          </Col>
        </Row>
      </Col>
    </RecentProjectsRow>
  );
}

export default RecentProjects;
