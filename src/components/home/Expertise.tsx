import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
import ExpertiseItem from '../common/ExpertiseItem';
import { SectionHeader } from './RecentProjects';
import {
  faCss3Alt,
  faDocker,
  faHtml5,
  faJava,
  faJs,
  faPython,
} from '@fortawesome/free-brands-svg-icons';
import { graphql, useStaticQuery } from 'gatsby';

const ExpertiseRow = styled(Row)`
  padding-bottom: 270px;
  /* padding-bottom: 70px; */
`;

function Expertise() {
  // Get all of the logo images.
  const logoImageData = useStaticQuery(graphql`
    query {
      python: file(relativePath: { eq: "expertise/Python.png" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <>
      <ExpertiseRow>
        <Col xs={{ span: 10, offset: 1 }}>
          <Row>
            <Col xs={12}>
              <SectionHeader>Expertise</SectionHeader>
            </Col>
          </Row>
          <Row>
            <ExpertiseItem
              logoImage={logoImageData.python.childImageSharp.fluid}
              name='Python'
              stars={5}
            />
            <ExpertiseItem icon={faJs} name='JavaScript' stars={5} />
            <ExpertiseItem icon={faJava} name='Java' stars={5} />
            <ExpertiseItem icon={faHtml5} name='HTML' stars={5} />
            <ExpertiseItem icon={faCss3Alt} name='CSS' stars={5} />
            <ExpertiseItem icon={faDocker} name='Docker' stars={4} />
          </Row>
        </Col>
      </ExpertiseRow>
    </>
  );
}

export default Expertise;
