import styled from 'styled-components';
import { StyledIconBase } from '@styled-icons/styled-icon';

export const Wrapper = styled.a`
  position: relative;
  display: flex;
  flex-direction: row;
  text-align: center;
  width: 100%;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.secondary};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const IconWrapper = styled.span`
  position: relative;
  min-width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${StyledIconBase} {
    width: ${({ theme }) => theme.font.sizes.xxlarge};
    height: ${({ theme }) => theme.font.sizes.xxlarge};
  }
`;

export const Title = styled.span`
  font-size: ${({ theme }) => theme.font.sizes.large};
  position: relative;
  padding: 0 10px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
`;
