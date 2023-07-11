import LeftIcon from '@assets/svg/left-icon.svg';
import RightIcon from '@assets/svg/right-icon.svg';
import { CALENDAR_MONTH_CHANGE, DEFAULT_MAX_DATE_RANGE } from '@constants/index';
import type { YearMonth } from '@type/date';

import { formatDate } from '@utils/date';

import { useDateRangePicker } from '@hooks/useDateRangePicker';

import Calendar from '@components/Calendar/Calendar';
import {
  containerStyling,
  nextButtonStyling,
} from '@components/DateRangePicker/DateRangePicker.style';

export interface DateRangePickerProps {
  /** 오늘 이후 날짜를 막을 것인지에 대한 여부 */
  isFutureDaysRestricted?: boolean;
  /** 특정 범위를 벗어나는 날짜에 대해서 선택 불가능할지에 대한 여부 */
  hasRangeRestriction?: boolean;
  /** 최대로 선택할 수 있는 날짜 범위 */
  maxDateRange?: number;
  /** 날짜를 선택했을 때 실행할 함수 */
  onDateSelect?: CallableFunction;
}

const DateRangePicker = ({
  isFutureDaysRestricted = false,
  hasRangeRestriction = false,
  maxDateRange = DEFAULT_MAX_DATE_RANGE,
  onDateSelect,
}: DateRangePickerProps) => {
  const { currentDate, calendarData, handleCalendarChange, selectedDateRange, handleDateSelect } =
    useDateRangePicker();

  const handleDateClick = (date: number, yearMonth: YearMonth) => () => {
    const clickedDate = formatDate(yearMonth.year, yearMonth.month, date);
    handleDateSelect(clickedDate, onDateSelect);
  };

  return (
    <div css={containerStyling}>
      <button
        type="button"
        aria-label="show previous month"
        onClick={handleCalendarChange(CALENDAR_MONTH_CHANGE.PREVIOUS_MONTH)}
      >
        <LeftIcon />
      </button>
      <Calendar
        currentDate={currentDate}
        yearMonthData={calendarData.prevYearMonth}
        dateRange={selectedDateRange}
        isFutureDaysRestricted={isFutureDaysRestricted}
        hasRangeRestriction={hasRangeRestriction}
        maxDateRange={maxDateRange}
        onDateClick={handleDateClick}
      />
      <Calendar
        currentDate={currentDate}
        yearMonthData={calendarData.currentYearMonth}
        dateRange={selectedDateRange}
        isFutureDaysRestricted={isFutureDaysRestricted}
        hasRangeRestriction={hasRangeRestriction}
        maxDateRange={maxDateRange}
        onDateClick={handleDateClick}
      />
      <button
        css={nextButtonStyling}
        type="button"
        aria-label="show next month"
        onClick={handleCalendarChange(CALENDAR_MONTH_CHANGE.NEXT_MONTH)}
      >
        <RightIcon />
      </button>
    </div>
  );
};

export default DateRangePicker;
