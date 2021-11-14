import * as S from './styles';

import customers from 'utils/customers';
import CustomerItem from 'components/CustomerItem';

type RecentCustomers = {
  name: string;
  country: string;
  image: string;
};

const RecentCustomers = () => {
  const data = customers as RecentCustomers[];

  return (
    <S.Wrapper>
      <S.CustomersHeader>
        <h2>Recent Customers</h2>
      </S.CustomersHeader>

      <S.CustomerContent>
        {data.map((customer, index) => (
          <CustomerItem
            key={index}
            name={customer.name}
            country={customer.country}
            image={customer.image}
            alt={`${customer.name} photo`}
          />
        ))}
      </S.CustomerContent>
    </S.Wrapper>
  );
};

export default RecentCustomers;
