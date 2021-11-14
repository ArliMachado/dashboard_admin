import styled, { css } from 'styled-components';
import { media } from 'styles/media';

import * as TopBarStyles from 'components/TopBar/styles';

type ContentProps = {
  hasActive: boolean;
};

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const Content = styled.div<ContentProps>`
  ${({ theme, hasActive }) => css`
    position: absolute;
    width: calc(100% - 300px);
    left: 300px;
    min-height: 100vh;
    background: ${theme.colors.secondary};
    transition: 0.5s;

    ${media.lessThan('large')`
      width: 100%;
      left: 0;
    `}

    ${!!hasActive &&
    css`
      width: calc(100% - 80px);
      left: 80px;

      ${media.lessThan('large')`
        left: 300px;
      `}

      ${media.lessThan('small')`
        left: 0;

        ${TopBarStyles.Toogle} {
          position: fixed;
          right: 0;
          left: initial;
          color: ${theme.colors.secondary};
        }
      `}
    `}
  `}
`;
