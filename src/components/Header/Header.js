import React from "react";
import styled from "styled-components/macro";

import { COLORS, WEIGHTS, QUERIES } from "../../constants";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);
  console.log(showMobileMenu);
  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <SideForTabletOrBelow>
          <UnstyledButton>
            <Icon id="shopping-bag" strokeWidth={1} />
          </UnstyledButton>
          <UnstyledButton>
            <Icon id="search" strokeWidth={1} />
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" strokeWidth={1} />
          </UnstyledButton>
        </SideForTabletOrBelow>
      </MainHeader>
      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  position: relative;
  
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  
  height: 80x;
  border-bottom: 1px solid var(--color-gray-300)};
  overflow-x: auto;


  @media ${QUERIES.tabletOrBelow}{
  border-top: 4px solid var(--color-gray-900)};
  }

`;

const Nav = styled.nav`
  display: flex;
  margin-left: 100px;
  flex: 1;
  justify-content: space-evenly;

  @media ${QUERIES.tabletOrBelow} {
    display: none;
  }
`;

const Side = styled.div`
  position: ${"" /* flex: 1; */};
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900)};
  font-weight: ${WEIGHTS.medium};


  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const SideForTabletOrBelow = styled.div`
  display: none;

  @media ${QUERIES.tabletOrBelow} {
    display: flex;
    ${"" /* why gap does not work here?? */}
    gap: 40px;
  }

  @media ${QUERIES.phoneOrBelow} {
    gap: 24px;
  }
`;

export default Header;
