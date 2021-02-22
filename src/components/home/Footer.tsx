import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
import { faEnvelope, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NoWrap } from '../styled/components';
import GetInTouchButton from '../common/GetInTouchButton';

const FooterRow = styled(Row)`
  margin-top: 3.5rem;
  margin-bottom: 3.5rem;
  text-align: center;
  font-size: 1.75rem;
`;

const GetInTouchButtonRow = styled(Col)`
  margin-bottom: 2.75rem;

  @media (min-width: 768px) {
    margin-top: 0.5rem;
    margin-bottom: 3rem;
  }
`;

function Footer() {
  return (
    <FooterRow>
      <Col xs={{ span: 10, offset: 1 }}>
        <GetInTouchButtonRow className='text-center'>
          <Col xs={12}>
            <GetInTouchButton />
          </Col>
        </GetInTouchButtonRow>
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
