import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
import { SectionHeader } from './RecentProjects';

const SkillsRow = styled(Row)`
  padding-bottom: 70px;
`;

function Skills() {
  return (
    <>
      <SkillsRow>
        <Col xs={{ span: 10, offset: 1 }}>
          <Row>
            <Col xs={12}>
              <SectionHeader>Languages &amp; Technologies</SectionHeader>
            </Col>
          </Row>
        </Col>
      </SkillsRow>
    </>
  );
}

export default Skills;
