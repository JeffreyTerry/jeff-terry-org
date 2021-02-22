import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
import ExpertiseItem from './expertise/ExpertiseItem';
import { SectionHeader } from '../styled/components';
import {
  faAws,
  faBootstrap,
  faCss3Alt,
  faDocker,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faNodeJs,
  faReact,
  faSwift,
} from '@fortawesome/free-brands-svg-icons';
import { graphql, useStaticQuery } from 'gatsby';

const ExpertiseRow = styled(Row)`
  padding-bottom: 70px;
`;

const OutroCol = styled(Col)`
  text-align: center;
`;

const OutroText = styled.h3`
  font-size: 2.25rem;
`;

function Expertise() {
  // Get all of the logo images.
  const logoImageData = useStaticQuery(graphql`
    query {
      # 5 stars
      python: file(relativePath: { eq: "expertise/Python.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      java: file(relativePath: { eq: "expertise/Java.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      django: file(relativePath: { eq: "expertise/Django.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      redux: file(relativePath: { eq: "expertise/Redux.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      cplusplus: file(relativePath: { eq: "expertise/CPlusPlus.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      c: file(relativePath: { eq: "expertise/C.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      csharp: file(relativePath: { eq: "expertise/CSharp.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      postgresql: file(relativePath: { eq: "expertise/PostgreSQL.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      typescript: file(relativePath: { eq: "expertise/TypeScript.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      bash: file(relativePath: { eq: "expertise/Bash.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      perl: file(relativePath: { eq: "expertise/Perl.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      haskell: file(relativePath: { eq: "expertise/Haskell.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      scheme: file(relativePath: { eq: "expertise/Lisp.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      angular: file(relativePath: { eq: "expertise/Angular.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
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
              <SectionHeader>Languages &amp; Technologies</SectionHeader>
            </Col>
          </Row>
          <Row>
            {/* 5 stars */}
            <ExpertiseItem
              logoImage={logoImageData.java.childImageSharp.fluid}
              name='Java'
              stars={5}
            />
            <ExpertiseItem
              logoImage={logoImageData.python.childImageSharp.fluid}
              name='Python'
              stars={5}
            />
            <ExpertiseItem icon={faJsSquare} name='JavaScript' stars={5} iconColor='#f7df3a' />
            <ExpertiseItem icon={faHtml5} name='HTML' stars={5} iconColor='#254deb' />
            <ExpertiseItem icon={faCss3Alt} name='CSS' stars={5} iconColor='#e44d29' />
            <ExpertiseItem icon={faBootstrap} name='Bootstrap' stars={5} iconColor='#7853b0' />

            {/* 4 stars */}
            <ExpertiseItem
              logoImage={logoImageData.django.childImageSharp.fluid}
              name='Django'
              stars={4}
            />
            <ExpertiseItem icon={faReact} name='ReactJS' stars={4} iconColor='#61dbfa' />
            <ExpertiseItem
              logoImage={logoImageData.redux.childImageSharp.fluid}
              name='Redux'
              stars={4}
            />

            {/* 3 stars */}
            <ExpertiseItem icon={faDocker} name='Docker' stars={3} iconColor='#2396ea' />
            <ExpertiseItem icon={faAws} name='AWS' stars={3} iconColor='#ec9137' />
            <ExpertiseItem
              logoImage={logoImageData.postgresql.childImageSharp.fluid}
              name='PostgreSQL'
              stars={3}
            />
            <ExpertiseItem
              logoImage={logoImageData.cplusplus.childImageSharp.fluid}
              name='C++'
              stars={3}
            />
            <ExpertiseItem logoImage={logoImageData.c.childImageSharp.fluid} name='C' stars={3} />
            <ExpertiseItem
              logoImage={logoImageData.typescript.childImageSharp.fluid}
              name='TypeScript'
              stars={3}
            />
            <ExpertiseItem icon={faNodeJs} name='NodeJS' stars={3} iconColor='#689f66' />
            <ExpertiseItem
              logoImage={logoImageData.bash.childImageSharp.fluid}
              name='Bash'
              stars={3}
            />
            <ExpertiseItem icon={faGitAlt} name='Git' stars={3} iconColor='#f05035' />

            {/* 2 stars */}
            <ExpertiseItem
              logoImage={logoImageData.csharp.childImageSharp.fluid}
              name='C#'
              stars={2}
            />
            <ExpertiseItem
              logoImage={logoImageData.perl.childImageSharp.fluid}
              name='Perl'
              stars={2}
            />

            {/* 1 star */}
            <ExpertiseItem icon={faSwift} name='Swift' stars={1} iconColor='#f05139' />
            <ExpertiseItem
              logoImage={logoImageData.angular.childImageSharp.fluid}
              name='Angular'
              stars={1}
            />
            <ExpertiseItem
              logoImage={logoImageData.haskell.childImageSharp.fluid}
              name='Haskell'
              stars={1}
            />
            <ExpertiseItem
              logoImage={logoImageData.scheme.childImageSharp.fluid}
              name='Scheme'
              stars={1}
            />
          </Row>
          <Row>
            <OutroCol xs={12}>
              <OutroText>...and I'm always excited to learn new stuff!</OutroText>
            </OutroCol>
          </Row>
        </Col>
      </ExpertiseRow>
    </>
  );
}

export default Expertise;
