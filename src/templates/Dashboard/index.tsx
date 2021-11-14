import CardBox from 'components/CardBox';
import RecentCustomers from 'components/RecentCustomers';
import RecentOrders from 'components/RecentOrders';
import Base from 'templates/Base';
import * as S from './styles';

const Dashboard = () => (
  <Base>
    <CardBox />

    <S.Details>
      <RecentOrders />
      <RecentCustomers />
    </S.Details>
  </Base>
);

export default Dashboard;
