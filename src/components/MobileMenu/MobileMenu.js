/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { WEIGHTS, QUERIES } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content>
        <CloseButton>
          <UnstyledButton onClick={onDismiss}>
            <Icon id="close" />
          </UnstyledButton>
        </CloseButton>
        <Navigation>
          <a href="/sale">Sale</a>
          <a href="/new">New&nbsp;Releases</a>
          <a href="/men">Men</a>
          <a href="/women">Women</a>
          <a href="/kids">Kids</a>
          <a href="/collections">Collections</a>
        </Navigation>
        <Footer>
          <a href="/terms">Terms and Conditions</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact Us</a>
        </Footer>
      </Content>
    </Overlay>
  );
};

export default MobileMenu;

const Overlay = styled(DialogOverlay)`
  position: fixed;
  display: flex;
  justify-content: flex-end;
  top: 0;
  right: 0;
  height: 100%;
  width: 100%;
  background: #60646ccc;
`;

const Content = styled(DialogContent)`
  height: 100%;
  width: 80%;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 32px;
`;

const CloseButton = styled.div`
  align-self: flex-end;
`;

const Navigation = styled.nav`
  display: flex;
  flex-direction: column;

  a {
    font-size: 1.125rem;
    text-transform: uppercase;
    text-decoration: none;
    color: var(--color-gray-900);
    font-weight: ${WEIGHTS.medium};
  }
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;

  a {
    text-decoration: none;
    color: var(--color-gray-900);
  }
`;
