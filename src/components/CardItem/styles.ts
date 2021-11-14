import styled, { css } from 'styled-components';
import { StyledIconBase } from '@styled-icons/styled-icon';

export const Wrapper = styled.div`
  ${({ theme }) => css`
     {
      position: relative;
      background: ${theme.colors.secondary};
      padding: 30px;
      border-radius: 20px;
      display: flex;
      justify-content: space-between;
      cursor: pointer;
      box-shadow: 0 7px 25px ${theme.colors.shadow};

      &:hover {
        background: ${theme.colors.primary};

        ${CardNumbers} {
          color: ${theme.colors.secondary};
        }
        ${CardTitle} {
          color: ${theme.colors.secondary};
        }
        ${CardIcon} {
          ${StyledIconBase} {
            color: ${theme.colors.secondary};
          }
        }
      }
    }
  `}
`;

export const CardInfo = styled.div``;

export const CardNumbers = styled.div`
  ${({ theme }) => css`
    position: relative;
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.xxxlarge};
    color: ${theme.colors.primary};
  `}
`;

export const CardTitle = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.large};
    margin-top: 5px;
  `}
`;
export const CardIcon = styled.div`
  ${StyledIconBase} {
    ${({ theme }) => css`
      color: ${theme.colors.gray};

      height: ${theme.spacings.xlarge};
      width: ${theme.spacings.xlarge};
    `}
  }
`;
