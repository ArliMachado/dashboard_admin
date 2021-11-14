import { Story, Meta } from '@storybook/react/types-6-0';
import CustomerItem from '.';

export default {
  title: 'CustomerItem',
  component: CustomerItem,
} as Meta;

export const Basic: Story = args => {
  return (
    <div style={{ width: '400px' }}>
      <CustomerItem
        image="img/img1.jpg"
        alt="David photo"
        name="David"
        country="Italy"
        {...args}
      />
    </div>
  );
};
