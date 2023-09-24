import DarkModeBtn from 'components/DarkModeBtn/DarkModeBtn';
import {
  Logo,
  LogoSpan,
  NavList,
  NavListLink,
  NavRow,
  Navigation,
} from './NavBar.styled';
import React from 'react';

function NavBar() {
  return (
    <Navigation className="nav">
      <div className="container">
        <NavRow className="nav-row">
          <Logo to="/" className="logo">
            <LogoSpan>Frontend</LogoSpan> portfolio
          </Logo>
          <DarkModeBtn />
          <NavList className="nav-list">
            <li className="nav-list__item">
              <NavListLink
                to="/"
                className="nav-list__link nav-list__link--active"
              >
                Home
              </NavListLink>
            </li>
            <li className="nav-list__item">
              <NavListLink to="/projects" className="nav-list__link">
                Projects
              </NavListLink>
            </li>
            <li className="nav-list__item">
              <NavListLink to="/contacts" className="nav-list__link">
                Contacts
              </NavListLink>
            </li>
          </NavList>
        </NavRow>
      </div>
    </Navigation>
  );
}
export default NavBar;
