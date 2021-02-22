import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import Headshot from '../images/Headshot';
import GetInTouchButton from '../common/GetInTouchButton';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import { NoWrap } from '../styled/components';

const IntroductionRow = styled(Row)`
  padding-bottom: 70px;
`;

const Name = styled.h1`
  font-size: 5rem;
  margin-bottom: 10px;
`;

const JobTitle = styled.h3`
  font-size: 1.5rem;
  line-height: 2.5rem;
  font-weight: bold;
  margin-bottom: 0px;
`;

const FastFactsRow = styled(Row)`
  margin-top: 25px;
`;

const FastFactCol = styled(Col)`
  margin-top: 15px;
`;

const FastFact = styled.h3`
  font-size: 1.75rem;
  font-weight: 500;
`;

const BiographyCol = styled(Col)`
  cursor: default;
  text-align: center;
`;

const BiographyParagraph = styled.p`
  text-align: left;
`;

const ReadMoreButton = styled.button`
  color: inherit;
  background-color: unset;
  border: unset;
  padding: unset;
  display: inline;
  text-align: center;
  text-decoration: underline;
  font-weight: 700;
`;

function Introduction() {
  const [readMore, setReadMore] = useState(false);

  return (
    <>
      <IntroductionRow>
        <Col xs={{ span: 10, offset: 1 }}>
          <Row>
            <Col xs={12} lg={8}>
              <Row className='align-items-center'>
                <Col xs={4} lg={3}>
                  <Headshot />
                </Col>
                <Col xs={8} lg={9}>
                  <Name>Jeff Terry</Name>
                  <JobTitle>
                    <span className='mr-3'>Software Engineer in</span>
                    <NoWrap>
                      <FontAwesomeIcon icon={faMapMarkerAlt} className='mr-2' />
                      <span>Oklahoma City</span>
                    </NoWrap>
                  </JobTitle>
                </Col>
              </Row>

              <FastFactsRow>
                <FastFactCol xs={{ span: 11, offset: 1 }}>
                  <FastFact>12+ years software engineering experience</FastFact>
                </FastFactCol>
                <FastFactCol xs={{ span: 11, offset: 1 }}>
                  <FastFact>2+ years writing pedagogy experience</FastFact>
                </FastFactCol>
                <FastFactCol xs={{ span: 11, offset: 1 }}>
                  <FastFact>
                    26+ years blinking experience
                    {/* TODO add a question icon with a tooltip */}
                  </FastFact>
                </FastFactCol>
              </FastFactsRow>

              <Row>
                <Col xs={12} className='text-center mt-5'>
                  <GetInTouchButton />
                </Col>
              </Row>
            </Col>
            <BiographyCol xs={12} lg={4} onClick={() => setReadMore(!readMore)}>
              <BiographyParagraph>
                <strong>
                  Hi, I’m Jeff, a software engineer currently based in Oklahoma. My professional
                  background is primarily in full-stack web development, but I’ve also done work in
                  a bunch of other areas—from robotics, to enterprise software, to data analytics.
                  I’m obsessed with building software that improves people’s lives, and I’m always
                  excited to learn whatever languages and technologies I need to make that happen!
                </strong>
              </BiographyParagraph>
              <BiographyParagraph>
                <strong>
                  Right now, I’m working part-time as the lead software engineer for a small
                  education non-profit called AskMe Tutoring. At AskMe, I’m working together with a
                  junior engineer to build a web application that helps students find and register
                  for online group classes. Once we finish the full build-out of AskMe’s platform
                  this summer, I’m planning to start my next full-time adventure in July.
                </strong>
              </BiographyParagraph>
              {readMore && (
                <>
                  <BiographyParagraph>
                    <strong>
                      Previously, I’ve worked as a software engineering intern for Microsoft and
                      National Instruments, and more recently, I’ve worked as a writing tutor and a
                      rhetoric instructor at the university level. As part of my graduate studies at
                      The Ohio State University, I not only got to read great works of literature,
                      but I also got to study digital media and software usability with a couple of
                      awesome professors. Last year, my graduate work culminated in{' '}
                      <OutboundLink href='https://presly.org'>Presly</OutboundLink>, an online
                      presentation coach that teaches students how to give great presentations.
                    </strong>
                  </BiographyParagraph>
                  <BiographyParagraph>
                    <strong>
                      For my next adventure, I’m looking to work for a company that’s as obsessed
                      with improving people’s lives as I am. I’m particularly interested in working
                      with teammates who enjoy using cutting-edge technologies to write clean,
                      efficient, and reliable code. Scroll down to see a few of my recent projects!
                    </strong>
                  </BiographyParagraph>
                </>
              )}
              <ReadMoreButton onClick={() => setReadMore(!readMore)}>
                Read {readMore ? 'less' : 'more'}
              </ReadMoreButton>
            </BiographyCol>
          </Row>
        </Col>
      </IntroductionRow>
    </>
  );
}

export default Introduction;
