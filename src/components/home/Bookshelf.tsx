import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
import { SectionHeader } from './RecentProjects';

const BookshelfRow = styled(Row)`
  padding-bottom: 60px;
`;

function Bookshelf() {
  return (
    <BookshelfRow>
      <Col xs={{ span: 10, offset: 1 }}>
        <Row>
          <Col xs={12}>
            <SectionHeader>Bookshelf</SectionHeader>
          </Col>
        </Row>
        <Row>Books</Row>
      </Col>
    </BookshelfRow>
  );
}

export default Bookshelf;
