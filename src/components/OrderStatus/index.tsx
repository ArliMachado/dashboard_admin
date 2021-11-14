import * as S from './styles';

export type OrderStatusProps = {
  status: 'delivered' | 'pending' | 'return' | 'inprogress';
};

const OrderStatus = ({ status }: OrderStatusProps) => (
  <S.Wrapper status={status}>{status}</S.Wrapper>
);

export default OrderStatus;
