import styled, { css, DefaultTheme } from 'styled-components';
import { media } from 'styles/media';
import { OrderStatusProps } from '.';

const wrapperModifiers = {
  delivered: (theme: DefaultTheme) => css`
    background: ${theme.colors.green};
  `,
  pending: (theme: DefaultTheme) => css`
    background: ${theme.colors.orange};
  `,
  return: (theme: DefaultTheme) => css`
    background: ${theme.colors.red};
  `,
  inprogress: (theme: DefaultTheme) => css`
    background: ${theme.colors.blue};

    ${media.lessThan('medium')`
      white-space: nowrap;
    `}
  `,
};

export const Wrapper = styled.span<OrderStatusProps>`
  ${({ theme, status }) => css`
    padding: 2px 4px;
    border-radius: ${theme.border.radius};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.normal};
    color: ${theme.colors.secondary};
    text-transform: capitalize;

    ${wrapperModifiers[status](theme)}
  `}
`;
