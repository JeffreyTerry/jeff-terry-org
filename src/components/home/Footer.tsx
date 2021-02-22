import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FooterRow = styled(Row)`
  margin-top: 3.5rem;
  margin-bottom: 3.5rem;
  text-align: center;
  font-size: 1.75rem;
`;

function Footer() {
  return (
    <FooterRow>
      <Col xs={{ span: 10, offset: 1 }}>
        <Row>
          <Col xs={12}>
            Made with <FontAwesomeIcon icon={faHeart} /> in Oklahoma.
          </Col>
        </Row>
      </Col>
    </FooterRow>
  );
}

export default Footer;
