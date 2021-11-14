import styled from 'styled-components';
import { media } from 'styles/media';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;

  ${media.lessThan('large')`
    grid-template-columns: repeat(2, 1fr);
  `}

  ${media.lessThan('small')`
    grid-template-columns: repeat(1, 1fr);
  `}
`;
