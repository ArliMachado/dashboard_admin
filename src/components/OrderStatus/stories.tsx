import { Story, Meta } from '@storybook/react/types-6-0';
import OrderStatus from '.';

export default {
  title: 'OrderStatus',
  component: OrderStatus,
  argTypes: {
    status: {
      control: {
        type: 'select',
        options: ['delivered', 'pending', 'return', 'inprogress'],
      },
    },
  },
} as Meta;

export const Default: Story = args => (
  <div style={{ width: '50px' }}>
    <OrderStatus status="delivered" {...args} />
  </div>
);
