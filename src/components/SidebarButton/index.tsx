import { AnchorHTMLAttributes } from 'react';
import * as S from './styles';

export type SidebarButtonProps = {
  title: string;
  icon: JSX.Element;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

const SidebarButton = ({ title, icon, ...props }: SidebarButtonProps) => (
  <S.Wrapper href="#" {...props}>
    <S.IconWrapper>{icon}</S.IconWrapper>
    <S.Title>{title}</S.Title>
  </S.Wrapper>
);

export default SidebarButton;
