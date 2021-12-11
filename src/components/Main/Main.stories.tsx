import Main from './Main';
import { Meta, Story } from '@storybook/react/types-6-0';

export default {
  title: 'Main',
  component: Main
} as Meta;

export const Basic: Story = (args) => <Main {...args} />;
