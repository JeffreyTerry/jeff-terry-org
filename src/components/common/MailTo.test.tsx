import React from 'react';
import { render, cleanup } from '@testing-library/react';
import MailTo from './MailTo';

describe('mail to', () => {
  afterEach(cleanup);

  it('renders without crashing', () => {
    render(
      <MailTo emailUser='test' emailHost='gmail.com'>
        Click to open your email client
      </MailTo>
    );
  });
});
