import LeftIcon from '@assets/svg/left-icon.svg';
import RightIcon from '@assets/svg/right-icon.svg';
import { CALENDAR_MONTH_CHANGE } from '@constants/index';
import type { YearMonth } from '@type/date';

import { formatDate } from '@utils/date';

import { useDateRangePicker } from '@hooks/useDateRangePicker';

import Calendar from '@components/Calendar/Calendar';
import { containerStyle, nextButtonStyle } from '@components/DateRangePicker/DateRangePicker.style';

interface DateRangePickerProps {
  /** 오늘 이후 날짜를 막을 것인지에 대한 여부 */
  isFutureDaysRestricted?: boolean;
  /** 날짜를 선택했을 때 실행할 함수 */
  onDaySelect?: CallableFunction;
}

const DateRangePicker = ({ isFutureDaysRestricted = false, onDaySelect }: DateRangePickerProps) => {
  const { currentDate, calendarData, handleCalendarChange, selectedDateRange, handleDaySelect } =
    useDateRangePicker();

  const handleDayClick = (day: number, yearMonth: YearMonth) => () => {
    const date = formatDate(yearMonth.year, yearMonth.month, day);
    handleDaySelect(date, onDaySelect);
  };

  return (
    <div css={containerStyle}>
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
        onDayClick={handleDayClick}
      />
      <Calendar
        currentDate={currentDate}
        yearMonthData={calendarData.currentYearMonth}
        dateRange={selectedDateRange}
        isFutureDaysRestricted={isFutureDaysRestricted}
        onDayClick={handleDayClick}
      />
      <button
        css={nextButtonStyle}
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
