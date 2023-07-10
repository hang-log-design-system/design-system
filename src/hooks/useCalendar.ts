import type { YearMonth } from '@type/date';
import { useState } from 'react';

import { getNewYearMonthInfo, getYearMonthInfo } from '@utils/date';

const useCalendar = () => {
  const currentDate = new Date();
  const currentYearMonth = getYearMonthInfo(currentDate);

  const [selectedDay, setSelectedDay] = useState<number>(currentDate.getDate());
  const [yearMonth, setYearMonth] = useState<YearMonth>(currentYearMonth);

  const handleDayClick = (day: number) => () => {
    setSelectedDay(day);
  };

  const handleYearMonthUpdate = (change: number) => () => {
    setSelectedDay(0);
    setYearMonth((prev) => getNewYearMonthInfo(prev, change));
  };

  return {
    currentDate,
    yearMonth,
    selectedDay,
    handleDayClick,
    handleYearMonthUpdate,
  };
};

export default useCalendar;
