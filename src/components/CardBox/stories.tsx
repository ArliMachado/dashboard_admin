import { Story, Meta } from '@storybook/react/types-6-0';
import CardBox from '.';

export default {
  title: 'CardBox',
  component: CardBox,
} as Meta;

export const Basic: Story = args => (
  <div>
    <CardBox {...args} />
  </div>
);
