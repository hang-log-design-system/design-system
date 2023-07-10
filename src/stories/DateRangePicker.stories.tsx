import type { Meta, StoryObj } from '@storybook/react';

import DateRangePicker from '@components/DateRangePicker/DateRangePicker';

const meta = {
  title: 'DateRangePicker',
  component: DateRangePicker,
  argTypes: {
    onDaySelect: { control: false },
  },
} satisfies Meta<typeof DateRangePicker>;

export default meta;
type Story = StoryObj<typeof DateRangePicker>;

export const Default: Story = {};

export const FutureDaysDisabled: Story = {
  args: {
    isFutureDaysRestricted: true,
  },
};
