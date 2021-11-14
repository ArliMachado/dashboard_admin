import * as S from './styles';

import OrderStatus from 'components/OrderStatus';
import orders from 'utils/orders';

type OrderProps = {
  name: string;
  price: string;
  payment: string;
  status: 'delivered' | 'pending' | 'return' | 'inprogress';
};

const RecentOrders = () => {
  const data = orders as OrderProps[];

  return (
    <S.Wrapper>
      <S.OrdersHeader>
        <h2>Recent Orders</h2>
        <a href="#">View All</a>
      </S.OrdersHeader>

      <S.Table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Price</td>
            <td>Payment</td>
            <td>Status</td>
          </tr>
        </thead>
        <tbody>
          {data.map((order, index) => (
            <tr key={index}>
              <td>{order.name}</td>
              <td>{order.price}</td>
              <td>{order.payment}</td>
              <td>
                <OrderStatus status={order.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </S.Table>
    </S.Wrapper>
  );
};

export default RecentOrders;
