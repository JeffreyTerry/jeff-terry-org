// Based on Jason Bellamy's npm package react-mailto: https://github.com/jasonbellamy/react-mailto
import React, { AnchorHTMLAttributes, ReactChild, ReactChildren } from 'react';

export const toSearchString = (searchParams = {}) => {
  return Object.keys(searchParams)
    .map((key) => `${key}=${encodeURIComponent(searchParams[key])}`)
    .join('&');
};

export const createMailToLink = (emailUser: string, emailHost: string, headers?: object) => {
  let link = `mailto:${emailUser}@${emailHost}`;
  if (headers) {
    link += `?${toSearchString(headers)}`;
  }
  return link;
};

interface MailToOptions {
  emailUser: string;
  emailHost: string;
  children: React.ReactNode;
  headers?: object;
  obfuscate?: boolean;
}

function MailTo({
  emailUser,
  emailHost,
  children,
  headers,
  obfuscate = true,
  ...rest
}: MailToOptions & AnchorHTMLAttributes<HTMLAnchorElement>) {
  function handleClick(event: React.MouseEvent) {
    event.preventDefault();
    window.location.href = createMailToLink(emailUser, emailHost, headers);
  }

  if (obfuscate) {
    // Email obfuscated
    return (
      <a onClick={handleClick} href='mailto:obfuscated' {...rest}>
        {children}
      </a>
    );
  }

  // Email not obfuscated
  return (
    <a href={createMailToLink(emailUser, emailHost, headers)} {...rest}>
      {children}
    </a>
  );
}

export default MailTo;
