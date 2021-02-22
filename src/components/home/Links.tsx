import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
import { SectionHeader } from './RecentProjects';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { NoWrap } from '../styled/components';

const LinksRow = styled(Row)`
  background-color: ${(props) => props.theme.bgColorSecondary};
  padding-bottom: 70px;
`;

const LinkCol = styled(Col)`
  margin-bottom: 3rem;
  text-align: center;
`;

const LinkItem = styled.h3`
  color: ${(props) => props.theme.themePrimary};
  padding-bottom: 60px;
  font-size: 2.75rem;
  display: inline;
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
          <Col xs={12} xl={{ span: 10, offset: 1 }}>
            <Row>
              <LinkCol xs={12} md={4}>
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
              <LinkCol xs={12} md={4}>
                <OutboundLink href='https://github.com/JeffreyTerry' style={{ color: '#171515' }}>
                  <LinkItem>
                    <NoWrap>
                      <FontAwesomeIcon icon={faGithub} className='mr-3' />
                      Github
                    </NoWrap>
                  </LinkItem>
                </OutboundLink>
              </LinkCol>
              <LinkCol xs={12} md={4}>
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
            </Row>
          </Col>
        </Row>
      </Col>
    </LinksRow>
  );
}

export default Links;
