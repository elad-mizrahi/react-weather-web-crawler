import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

const Header = () => {
  return (
    <nav className="breadcrumb is-centered"  >
<ul>
  <li>
      <IndexLink to="/" activeClassName="active">Weather</IndexLink>
      </li>
      <li>
      <Link to="/about" activeClassName="active">About</Link>
      </li>
      </ul>
    </nav>
  );
};

export default Header;
