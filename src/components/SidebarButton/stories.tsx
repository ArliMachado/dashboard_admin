import { Story, Meta } from '@storybook/react/types-6-0';
import { Home } from '@styled-icons/ionicons-outline';
import SidebarButton from '.';

export default {
  title: 'SidebarButton',
  component: SidebarButton,
} as Meta;

export const Default: Story = args => (
  <div style={{ width: '30rem', padding: '10px' }}>
    <SidebarButton title="Dashboard" icon={<Home />} {...args} />
  </div>
);
