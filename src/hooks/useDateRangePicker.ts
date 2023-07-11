import { CALENDAR_MONTH_CHANGE } from '@constants/index';
import type { DateRangePickerCalendar, SelectedDateRange, YearMonth } from '@type/date';
import { useState } from 'react';

import { getNewYearMonthInfo, getYearMonthInfo } from '@utils/date';

export const useDateRangePicker = () => {
  const currentDate = new Date();
  const currentMonthYearDetail = getYearMonthInfo(currentDate);

  const [calendarData, setCalendarData] = useState<DateRangePickerCalendar>({
    prevYearMonth: getNewYearMonthInfo(
      currentMonthYearDetail,
      CALENDAR_MONTH_CHANGE.PREVIOUS_MONTH
    ),
    currentYearMonth: currentMonthYearDetail,
  });

  const [selectedDateRange, setSelectedDateRange] = useState<SelectedDateRange>({
    start: null,
    end: null,
  });

  const handleMonthChange = (change: number) => () => {
    setCalendarData((prevCalendarData) => {
      const newCalendarData = { ...prevCalendarData };

      if (change > 0) {
        newCalendarData.prevYearMonth = prevCalendarData.currentYearMonth;
        newCalendarData.currentYearMonth = getNewYearMonthInfo(
          newCalendarData.prevYearMonth,
          change
        );
      }

      if (change < 0) {
        newCalendarData.currentYearMonth = prevCalendarData.prevYearMonth;
        newCalendarData.prevYearMonth = getNewYearMonthInfo(
          newCalendarData.currentYearMonth,
          change
        );
      }

      return newCalendarData;
    });
  };

  const resetSelectedDateRange = () => {
    setSelectedDateRange({ start: null, end: null });
  };

  const handleDateSelect = (dateString: string, onDaySelect?: CallableFunction) => {
    setSelectedDateRange((prevSelectedDateRange) => {
      const startDate = prevSelectedDateRange.start ? new Date(prevSelectedDateRange.start) : null;
      const selectedDate = new Date(dateString);

      const nextSelectedDates: SelectedDateRange = {
        start: null,
        end: null,
      };

      if (startDate && !prevSelectedDateRange.end && selectedDate < startDate) {
        nextSelectedDates.start = dateString;
        nextSelectedDates.end = prevSelectedDateRange.start;
      } else if (startDate && !prevSelectedDateRange.end) {
        nextSelectedDates.start = prevSelectedDateRange.start;
        nextSelectedDates.end = dateString;
      } else {
        nextSelectedDates.start = dateString;
      }

      onDaySelect?.(nextSelectedDates);

      return nextSelectedDates;
    });
  };

  return {
    currentDate,
    calendarData,
    handleMonthChange,
    selectedDateRange,
    resetSelectedDateRange,
    handleDateSelect,
  };
};
