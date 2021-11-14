import styled, { css } from 'styled-components';
import { media } from 'styles/media';

type WrapperProps = {
  hasActive: boolean;
};

const wrapperModifiers = {
  minimal: () => css`
    width: 80px;

    ${media.lessThan('large')`
      width: 300px;
      left: 0;
    `}

    ${media.lessThan('small')`
      width: 100%;
      left: 0;
    `}
  `,
};

export const Wrapper = styled.nav<WrapperProps>`
  ${({ theme, hasActive }) => css`
    position: fixed;
    width: 300px;
    height: 100%;
    background-color: ${theme.colors.primary};
    border-left: 10px solid ${theme.colors.primary};
    transition: 0.5s;
    overflow: hidden;

    ${media.lessThan('large')`
      left: -300px;
    `}

    ${media.lessThan('small')`
      width: 100%;
      left: -100%;
      z-index: 1000;
    `}

    ${!!hasActive && wrapperModifiers.minimal()};
  `}
`;

export const List = styled.ul`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;

export const ListItem = styled.li`
  position: relative;
  width: 100%;
  list-style: none;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;

  &:first-child {
    margin-bottom: 40px;
    pointer-events: none;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
    border-top-left-radius: 40px;

    &:before {
      content: '';
      position: absolute;
      right: 0;
      top: -50px;
      width: 50px;
      height: 50px;
      background: transparent;
      border-radius: 50%;
      box-shadow: 35px 35px 0 10px ${({ theme }) => theme.colors.secondary};
      pointer-events: none;
    }

    &:after {
      content: '';
      position: absolute;
      right: 0;
      bottom: -50px;
      width: 50px;
      height: 50px;
      background: transparent;
      border-radius: 50%;
      box-shadow: 35px -35px 0 10px ${({ theme }) => theme.colors.secondary};
      pointer-events: none;
    }
  }
`;
