import { Story, Meta } from '@storybook/react/types-6-0';
import { Eye } from '@styled-icons/ionicons-outline';

import CardItem from '.';

export default {
  title: 'CardItem',
  component: CardItem,

  argTypes: {
    numbers: {
      type: 'string',
    },
    title: {
      type: 'string',
    },
    icon: {
      type: '',
    },
  },
} as Meta;

export const Default: Story = args => (
  <div style={{ width: '30rem' }}>
    <CardItem numbers="1,504" title="Daily Views" icon={<Eye />} {...args} />
  </div>
);
