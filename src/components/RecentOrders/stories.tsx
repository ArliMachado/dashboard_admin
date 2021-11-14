import { Story, Meta } from '@storybook/react/types-6-0';
import RecentOrders from '.';

export default {
  title: 'RecentOrders',
  component: RecentOrders,
} as Meta;

export const Basic: Story = args => (
  <div style={{ width: '800px' }}>
    <RecentOrders {...args} />
  </div>
);
