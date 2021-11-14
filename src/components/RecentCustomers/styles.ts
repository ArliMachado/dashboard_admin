import styled, { css } from 'styled-components';
import { media } from 'styles/media';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: grid;
    min-height: 500px;
    padding: 20px;
    background: ${theme.colors.secondary};
    box-shadow: 0 7px 25px ${theme.colors.shadow};
    border-radius: 20px;
  `}
`;

export const CustomersHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;

  h2 {
    ${({ theme }) => css`
      font-weight: ${theme.font.bold};
      color: ${theme.colors.primary};
      font-size: ${theme.font.sizes.xxlarge};

      ${media.lessThan('small')`
        font-size: ${theme.font.sizes.xlarge};
      `}
    `}
  }
`;

export const CustomerContent = styled.div``;
