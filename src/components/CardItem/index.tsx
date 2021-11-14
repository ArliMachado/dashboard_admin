import { HTMLAttributes } from 'react';
import * as S from './styles';

type CardItemProps = {
  numbers: string;
  title: string;
  icon: JSX.Element;
} & HTMLAttributes<HTMLElement>;

const CardItem = ({ numbers, title, icon, ...props }: CardItemProps) => (
  <S.Wrapper {...props}>
    <S.CardInfo>
      <S.CardNumbers>{numbers}</S.CardNumbers>
      <S.CardTitle>{title}</S.CardTitle>
    </S.CardInfo>
    <S.CardIcon>{icon}</S.CardIcon>
  </S.Wrapper>
);

export default CardItem;
