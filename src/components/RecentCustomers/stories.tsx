import { Story, Meta } from '@storybook/react/types-6-0';
import RecentCustomers from '.';

export default {
  title: 'RecentCustomers',
  component: RecentCustomers,
} as Meta;

export const Basic: Story = args => <RecentCustomers {...args} />;
