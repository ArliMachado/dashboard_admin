import styled, { css } from 'styled-components';
import { media } from 'styles/media';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    min-height: 500px;
    background: ${theme.colors.secondary};
    padding: 20px;
    box-shadow: 0 0px 25px ${theme.colors.shadow};
    border-radius: 20px;
  `}
`;

export const OrdersHeader = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    margin-bottom: 20px;

    h2 {
      font-weight: ${theme.font.bold};
      color: ${theme.colors.primary};
      font-size: ${theme.font.sizes.xxlarge};

      ${media.lessThan('small')`
        font-size: ${theme.font.sizes.xlarge};
      `}
    }

    a {
      position: relative;
      padding: 5px 10px;
      background: ${theme.colors.primary};
      text-decoration: none;
      color: ${theme.colors.secondary};
      border-radius: 6px;
    }
  `}
`;

export const OrdersContent = styled.div``;

export const Table = styled.table`
  ${({ theme }) => css`
    width: 100%;
    border-collapse: collapse;

    thead {
      td {
        font-weight: ${theme.font.bold};
      }
    }

    tr {
      color: ${theme.colors.darkGray};
      border-bottom: 1px solid ${theme.colors.shadow};

      td {
        padding: ${theme.spacings.xxsmall};

        &:last-child {
          text-align: end;
        }

        /* ordernar colunas */
        &:nth-child(2) {
          text-align: end;
        }

        &:nth-child(3) {
          text-align: center;
        }
      }

      &:last-child {
        border-bottom: none;
      }
    }

    tbody {
      tr {
        &:hover {
          background: ${theme.colors.primary};
          color: ${theme.colors.secondary};
        }
      }
    }
  `}
`;
