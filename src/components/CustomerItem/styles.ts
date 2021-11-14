import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 12px 10px;

  &:hover {
    ${({ theme }) => css`
      background: ${theme.colors.primary};
      color: ${theme.colors.secondary};
      ${Country} {
        color: ${theme.colors.secondary};
      }
    `}
  }
`;

export const ImageContent = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 20px;
`;
export const Image = styled.img`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Username = styled.h4`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    line-height: ${theme.font.sizes.small};

    margin-bottom: ${theme.spacings.xxsmall};
  `}
`;
export const Country = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.gray};
  `};
`;
