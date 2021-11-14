import CardItem from 'components/CardItem';
import * as S from './styles';
import { Cart, Cash, Chatbubble, Eye } from '@styled-icons/ionicons-outline';

const CardBox = () => (
  <S.Wrapper>
    <CardItem title="Daily Views" numbers="1,504" icon={<Eye />} />
    <CardItem title="Sales" numbers="80" icon={<Cart />} />
    <CardItem title="Comments" numbers="284" icon={<Chatbubble />} />
    <CardItem title="Earning" numbers="$7,842" icon={<Cash />} />
  </S.Wrapper>
);

export default CardBox;
