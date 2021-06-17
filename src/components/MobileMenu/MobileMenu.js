/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import { COLORS, WEIGHTS, QUERIES } from "../../constants";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content>
        <ButtonWrapper>
          <UnstyledButton onClick={onDismiss}>
            <VisuallyHidden>Close</VisuallyHidden>
            <Icon id="close" strokeWidth={1} />
          </UnstyledButton>
        </ButtonWrapper>

        <Main>
          <TopSpacer></TopSpacer>
          <Nav>
            <a href="/sale">Sale</a>
            <a href="/new">New&nbsp;Releases</a>
            <a href="/men">Men</a>
            <a href="/women">Women</a>
            <a href="/kids">Kids</a>
            <a href="/collections">Collections</a>
          </Nav>
          <MidSpacer></MidSpacer>
          <Footer>
            <a href="/terms">Terms and Conditions</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/contact">Contact Us</a>
          </Footer>
        </Main>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background: var(--color-overlay);
  display: flex;
  justify-content: flex-end;
`;

const Content = styled(DialogContent)`
  position: relative;
  background: white;
  height: 100%;
  width: calc(300 / 16 * 1rem);
  display: flex;
  flex-directin: column;
  align-items: flex-end;
  padding-left: 32px;
  padding-bottom: 32px;
`;

const ButtonWrapper = styled.div`
  position: fixed;
  top: 32px;
  right: 22px;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  & a {
    text-decoration: none;
    color: inherit;
    text-transform: uppercase;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  & a {
    font-size: calc(18 / 16 * 1rem);
    margin-bottom: calc(22 / 16 * 1rem);
    font-weight: ${WEIGHTS.medium};
    &:first-of-type {
      color: var(--color-secondary);
    }
  }
`;

const Footer = styled.footer`
display: flex;
flex-direction: column;

& a{
  font-size: calc(14/16*1rem);
  color: var(--color-gray-700)};
  margin-top: calc(14/16*1rem);
  font-weight: ${WEIGHTS.normal};
};
`;

const TopSpacer = styled.div`
  flex: 2;
`;

const MidSpacer = styled.div`
  flex: 1;
`;
export default MobileMenu;
