import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
import { SectionHeader } from '../styled/components';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faGoodreads, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { NoWrap } from '../styled/components';
import GetInTouchButton from '../common/GetInTouchButton';

const LinksRow = styled(Row)`
  background-color: ${(props) => props.theme.bgColorSecondary};
  padding-bottom: 100px;
`;

const LinkCol = styled(Col)`
  margin-bottom: 3rem;
  text-align: center;
`;

const LinkItem = styled.h3`
  color: ${(props) => props.theme.themePrimary};
  margin-bottom: 60px;
  font-size: 2.75rem;
  font-weight: 500;
  display: inline;
`;

const EmailCol = styled(Col)`
  margin-top: 0.5rem;
  margin-bottom: 0.75rem;
  font-size: 2.75rem;
`;

function Links() {
  return (
    <LinksRow>
      <Col xs={{ span: 10, offset: 1 }}>
        <Row>
          <Col xs={12}>
            <SectionHeader>Links</SectionHeader>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Row>
              <LinkCol xs={12} md={6} xl={3}>
                {/* <Link to='/resume' style={{ color: '#007A39' }}> */}
                {/* <Link to='/resume' style={{ color: '#148F46' }}> */}
                <Link to='/resume' style={{ color: '#009D49' }}>
                  <LinkItem>
                    <NoWrap>
                      <FontAwesomeIcon icon={faFileAlt} className='mr-3' />
                      Resume
                    </NoWrap>
                  </LinkItem>
                </Link>
              </LinkCol>
              <LinkCol xs={12} md={6} xl={3}>
                <OutboundLink href='https://github.com/JeffreyTerry' style={{ color: '#171515' }}>
                  <LinkItem>
                    <NoWrap>
                      <FontAwesomeIcon icon={faGithub} className='mr-3' />
                      Github
                    </NoWrap>
                  </LinkItem>
                </OutboundLink>
              </LinkCol>
              <LinkCol xs={12} md={6} xl={3}>
                <OutboundLink
                  href='https://www.linkedin.com/in/jeffrey-terry-25331b22/'
                  style={{ color: '#0078b7' }}
                >
                  <LinkItem>
                    <NoWrap>
                      <FontAwesomeIcon icon={faLinkedin} className='mr-3' />
                      LinkedIn
                    </NoWrap>
                  </LinkItem>
                </OutboundLink>
              </LinkCol>
              <LinkCol xs={12} md={6} xl={3}>
                <OutboundLink
                  href='https://www.goodreads.com/user/show/43070334-jeffrey-terry'
                  style={{ color: '#553b0e' }}
                >
                  <LinkItem>
                    <NoWrap>
                      <FontAwesomeIcon icon={faGoodreads} className='mr-3' />
                      Goodreads
                    </NoWrap>
                  </LinkItem>
                </OutboundLink>
              </LinkCol>
            </Row>
          </Col>
        </Row>
        <Row className='text-center'>
          <EmailCol xs={12}>
            <NoWrap>
              <FontAwesomeIcon icon={faEnvelope} className='mr-3' />
              Email
            </NoWrap>
          </EmailCol>
          <Col xs={12}>
            <GetInTouchButton />
          </Col>
        </Row>
      </Col>
    </LinksRow>
  );
}

export default Links;
