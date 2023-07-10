import type { Meta, StoryObj } from '@storybook/react';

import useCalendar from '@hooks/useCalendar';

import Calendar from '@components/Calendar/Calendar';

const meta = {
  title: 'Calendar',
  component: Calendar,
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof Calendar>;

export const Default: Story = {
  render: () => {
    const { currentDate, yearMonth, selectedDay } = useCalendar();

    return (
      <Calendar currentDate={currentDate} yearMonthData={yearMonth} selectedDay={selectedDay} />
    );
  },
};

export const Clickable: Story = {
  render: () => {
    const { currentDate, yearMonth, selectedDay, handleDayClick } = useCalendar();

    return (
      <Calendar
        currentDate={currentDate}
        yearMonthData={yearMonth}
        selectedDay={selectedDay}
        onDayClick={handleDayClick}
      />
    );
  },
};
