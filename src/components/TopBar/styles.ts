import styled from 'styled-components';
import { Search, Menu } from '@styled-icons/ionicons-outline';
import { media } from 'styles/media';

export const Wrapper = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`;

export const MenuIcon = styled(Menu).attrs({
  size: 40,
})``;

export const Toogle = styled.button`
  background: none;
  border: none;
  color: inherit;

  position: relative;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  ${media.lessThan('small')`
    z-index: 10001;
  `}
`;

export const SearchContainer = styled.div`
  position: relative;
  width: 400px;
  margin: 0 10px;
`;

export const SearchContent = styled.label`
  position: relative;
  width: 100%;

  > input {
    width: 100%;
    height: 40px;
    border-radius: 40px;
    padding: 5px 20px;
    padding-left: 35px;
    font-size: ${({ theme }) => theme.font.sizes.large};
    font-weight: ${({ theme }) => theme.font.normal};
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.darkGray};
  }
`;

export const SearchIcon = styled(Search).attrs(({ theme }) => ({
  size: theme.font.sizes.large,
}))`
  position: absolute;
  top: 0;
  left: 10px;
`;

export const User = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;

  ${media.lessThan('small')`
    min-width: 40px;
  `}

  > img {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
