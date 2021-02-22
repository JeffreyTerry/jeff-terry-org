import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
import { SectionHeader } from '../styled/components';
import { graphql, useStaticQuery } from 'gatsby';
import Book from './bookshelf/Book';

const BookshelfRow = styled(Row)`
  padding-bottom: 60px;
`;

function Bookshelf() {
  // Get all of the book cover images.
  const bookImageData = useStaticQuery(graphql`
    query {
      tolstoy: file(relativePath: { eq: "books/Tolstoy.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      hemingway: file(relativePath: { eq: "books/Hemingway.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      wells: file(relativePath: { eq: "books/Wells.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <BookshelfRow>
      <Col xs={{ span: 10, offset: 1 }}>
        <Row>
          <Col xs={12}>
            <SectionHeader>Bookshelf</SectionHeader>
          </Col>
        </Row>
        <Row>
          <Book coverImage={bookImageData.tolstoy.childImageSharp.fluid} name='Anna Karenina' />
          <Book
            coverImage={bookImageData.hemingway.childImageSharp.fluid}
            name='A Moveable Feast'
          />
          <Book
            coverImage={bookImageData.wells.childImageSharp.fluid}
            name='The Island of Dr. Moreau'
          />
          {/* https://www.goodreads.com/user/show/43070334-jeffrey-terry */}
        </Row>
      </Col>
    </BookshelfRow>
  );
}

export default Bookshelf;
