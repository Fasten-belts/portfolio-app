import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Navigation = styled.nav`
  padding: 20px 0;
  background-color: var(--nav-bg);
  border-bottom: 1px solid var(--nav-border);
  color: var(--nav-text);
  letter-spacing: normal;
`;

export const NavRow = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  column-gap: 30px;
  row-gap: 20px;
  flex-wrap: wrap;
`;

export const Logo = styled(NavLink)`
  padding: 10px;
  background-image: linear-gradient(-180deg, #a9a9a9 0%, #404040 100%);
  border-radius: 0.5rem;
  box-sizing: border-box;
  margin-right: auto;
  color: var(--nav-text);
  font-size: 24px;
  font-family: 'Poppins', sans-serif;
`;

export const LogoSpan = styled.span`
  font-weight: 700;
`;

export const NavList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: 10px;
  align-items: center;
  column-gap: 40px;
  font-size: 16px;
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
`;

export const NavListLink = styled(NavLink)`
  color: var(--nav-text);
  transition: opacity 0.2s ease-in;
  &.active::before {
    content: '';

    position: absolute;
    left: 0;
    top: 100%;

    display: block;
    height: 2px;
    width: 100%;
    background-color: var(--accent);
  }

  &:hover {
    opacity: 0.8;
  }
  &.active {
    position: relative;
  }
`;
