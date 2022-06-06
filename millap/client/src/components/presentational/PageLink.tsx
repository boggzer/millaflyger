import { Link, LinkProps } from 'react-router-dom';

import React from 'react';

const PageLink: React.FunctionComponent<LinkProps> = ({ children, className, to }) => (
  <Link to={to} className={className}>{children}</Link>
);

export default PageLink;
