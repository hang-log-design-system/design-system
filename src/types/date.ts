export interface YearMonth {
  /** 년도 문자열 */
  year: string;
  /** 월 문자열 - '06' 포맷 */
  month: string;
  /** 월의 시작일 Date */
  startDate: Date;
  /** 월의 첫 번째 날 */
  firstDay: number;
  /** 월의 마지막 번째 날 */
  lastDay: number;
}

export interface DayInfo {
  /** 월의 Day 박스의 인덱스 */
  index: number;
  /** 현재 년월 정보 */
  yearMonthData: YearMonth;
  /** 현재 Date */
  currentDate: Date;
  /** 현재 선택된 날짜 범위 */
  dateRange?: SelectedDateRange;
  /** 현재 선택된 날짜 */
  selectedDay?: number;
  /** 현재 날짜가 선택된 날짜 범위 안에 있는지에 대한 여부 */
  isFutureDaysRestricted?: boolean;
}

export interface DateRangePickerCalendar {
  prevYearMonth: YearMonth;
  currentYearMonth: YearMonth;
}

export interface SelectedDateRange {
  start: string | null;
  end: string | null;
}
