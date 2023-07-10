import { CALENDAR_DATE_LENGTH } from '@constants/index';
import { DayInfo, YearMonth } from '@type/date';

/** 2023-07-10 포맷인 날짜 문자열을 Date로 변경해 주는 함수 */
export const toDate = (dateString: string) => {
  const [year, month, day] = dateString.split('-').map(Number);

  return new Date(year, month - 1, day);
};

/** Date를 2023-07-10 포맷인 날짜 문자열로 변경해 주는 함수 */
export const formatDate = (year: number | string, month: number | string, day: number | string) => {
  return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
};

/** 해당 월의 달력에 필요한 Day 박스의 개수를 리턴해 주는 함수 */
export const getDayBoxSize = (yearMonth: YearMonth) => {
  return yearMonth.firstDay + yearMonth.lastDay <= CALENDAR_DATE_LENGTH.MIN
    ? CALENDAR_DATE_LENGTH.MIN
    : CALENDAR_DATE_LENGTH.MAX;
};

/** 특정 Date에 대해서 년월 정보를 가공해 주는 함수 */
export const getYearMonthInfo = (initialDate: Date) => {
  const month = String(initialDate.getMonth() + 1).padStart(2, '0');
  const year = String(initialDate.getFullYear());
  const startDate = new Date(`${year}-${month}`);
  const firstDay = startDate.getDay();
  const lastDateString = String(
    new Date(initialDate.getFullYear(), initialDate.getMonth() + 1, 0).getDate()
  );
  const lastDay = Number(lastDateString.padStart(2, '0'));

  return { month, year, startDate, firstDay, lastDay };
};

/** 특정 년월의 이전/이후 년월 정보를 제공해 주는 함수 */
export const getNewYearMonthInfo = (currentDate: YearMonth, change: number = 1) => {
  const startDate = new Date(currentDate.startDate);
  startDate.setMonth(startDate.getMonth() + change);

  const newMonthYear = new Date(startDate);

  return getYearMonthInfo(newMonthYear);
};

/** 현재 날짜가 선택된 날짜 범위 안에 있는지에 대한 여부를 알려주는 함수 */
const isDayWithinRange = (
  dateString: string,
  startString: string | null,
  endString: string | null
) => {
  if (!startString || !endString) return false;

  const date = toDate(dateString);
  const start = toDate(startString);
  const end = toDate(endString);

  return start <= date && date <= end;
};

/** 현재 날짜가 오늘 이후 날짜인지에 대한 여부를 알려주는 함수 */
const isDayInFuture = (dateString: string, endString: string | null) => {
  if (!endString) return false;

  const date = toDate(dateString);
  const end = toDate(endString);

  return date > end;
};

/** 특정 날에 대한 정보를 제공해 주는 함수 */
export const getDayInfo = ({
  index,
  yearMonthData,
  currentDate,
  dateRange,
  selectedDay,
  isFutureDaysRestricted,
}: DayInfo) => {
  const day = index - yearMonthData.firstDay + 1;

  const dateString = formatDate(yearMonthData.year, yearMonthData.month, day);
  const todayDateString = formatDate(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    currentDate.getDate()
  );

  const isNotDay = index < yearMonthData.firstDay || yearMonthData.lastDay < day;
  const isToday = todayDateString === dateString;
  const isSelected =
    selectedDay === day || dateRange?.start === dateString || dateRange?.end === dateString;
  const isInRange =
    !!dateRange?.start &&
    !!dateRange?.end &&
    isDayWithinRange?.(dateString, dateRange.start, dateRange.end);
  const isRestricted = isFutureDaysRestricted && isDayInFuture(dateString, todayDateString);

  return { day, isNotDay, dateString, isToday, isSelected, isInRange, isRestricted };
};
