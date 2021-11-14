import { Story, Meta } from '@storybook/react/types-6-0';
import TopBar from '.';

export default {
  title: 'TopBar',
  component: TopBar,
} as Meta;

export const Basic: Story = args => (
  <TopBar handleToggle={() => {}} {...args} />
);
