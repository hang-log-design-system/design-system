import RadioButton from '@/components/RadioButton/RadioButton';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'RadioButton',
  component: RadioButton,
  args: {
    label: 'Radio',
    options: ['option1', 'option2'],
    supportingText: 'supporting Text',
    name: 'sample',
  },
} satisfies Meta<typeof RadioButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
