import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from '../../../../assets/images/logo';

const Navbar = ({links}) => {
  const list = links.map(link => {
    const { path, title } = link;
    return (
      <NavLink
        key={title}
        to={path}
        className="arrow"
        activeClassName="arrow-active"
      >
        <div className="arrow-body">{title}</div>
        <div className="arrow-arrow" />
      </NavLink>
    );
  });
  return (
    <nav className="menu">
      <header>
        <img className="logo" src={logo} alt="logo" />
        <h1 className="title">
          паркинг <br /> онлайн
        </h1>
      </header>
      <div className="list">{list}</div>
      <div className="exit">
        <a
          className="btn"
          rel="nofollow"
          data-method="delete"
          href="/users/sign_out"
          id="enter"
        >
          {' '}
          Выйти{' '}
        </a>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  links: PropTypes.array.isRequired
}

export default Navbar;