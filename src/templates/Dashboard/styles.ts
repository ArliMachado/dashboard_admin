import styled from 'styled-components';
import { media } from 'styles/media';
import * as RecentOrdersStyles from 'components/RecentOrders/styles';

export const Wrapper = styled.div``;

export const Details = styled.div`
  position: relative;
  width: 100%;
  padding: 20px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 30px;

  ${media.lessThan('medium')`
    grid-template-columns: repeat(1, 1fr);

    ${RecentOrdersStyles.Wrapper} {
      overflow-x: auto;
    }

  `}
`;
