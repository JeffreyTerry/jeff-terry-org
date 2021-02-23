import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
import { SectionHeader } from '../styled/components';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faGoodreads, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { NoWrap } from '../styled/components';

const LinksRow = styled(Row)`
  background-color: ${(props) => props.theme.bgColorSecondary};
  padding-bottom: 2.5rem;

  @media (min-width: 768px) {
    padding-bottom: 3.5rem;
  }
`;

const LinkCol = styled(Col)`
  text-align: center;
  margin-bottom: 2.5rem;

  @media (min-width: 768px) {
    margin-bottom: 2.75rem;
  }
  @media (min-width: 1200px) {
    margin-bottom: 3rem;
  }

  a {
    text-decoration: none;
    :hover {
      text-decoration: underline;
    }
  }
`;

const LinkItem = styled.h3`
  color: ${(props) => props.theme.themePrimary};
  margin-bottom: 60px;
  font-size: 2.25rem;
  font-weight: 500;
  display: inline;

  @media (min-width: 768px) {
    font-size: 2.75rem;
  }
`;

function Links() {
  return (
    <LinksRow>
      <Col xs={{ span: 10, offset: 1 }} className='col-3k-8 offset-3k-2 col-4k-6 offset-4k-3'>
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
                      <FontAwesomeIcon icon={faFileAlt} className='me-3' />
                      Resume
                    </NoWrap>
                  </LinkItem>
                </Link>
              </LinkCol>
              <LinkCol xs={12} md={6} xl={3}>
                <OutboundLink href='https://github.com/JeffreyTerry' style={{ color: '#171515' }}>
                  <LinkItem>
                    <NoWrap>
                      <FontAwesomeIcon icon={faGithub} className='me-3' />
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
                      <FontAwesomeIcon icon={faLinkedin} className='me-3' />
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
                      <FontAwesomeIcon icon={faGoodreads} className='me-3' />
                      Goodreads
                    </NoWrap>
                  </LinkItem>
                </OutboundLink>
              </LinkCol>
            </Row>
          </Col>
        </Row>
      </Col>
    </LinksRow>
  );
}

export default Links;
