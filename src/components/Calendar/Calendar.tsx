import { DAYS_OF_WEEK } from '@constants/index';
import type { SelectedDateRange, YearMonth } from '@type/date';
import { useMemo } from 'react';

import { getDayBoxSize, getDayInfo } from '@utils/date';

import {
  containerStyle,
  dayContainerStyle,
  dayOfWeekContainerStyle,
  headerStyle,
} from '@components/Calendar/Calendar.style';
import Day from '@components/Calendar/Day/Day';
import Heading from '@components/Heading/Heading';

export interface CalendarProps {
  /** 현재 Date */
  currentDate: Date;
  /** 현재 년월 정보 */
  yearMonthData: YearMonth;
  /** 현재 선택된 날짜 범위 */
  dateRange?: SelectedDateRange;
  /** 오늘 이후 날짜를 막을 것인지에 대한 여부 */
  isFutureDaysRestricted?: boolean;
  /** 특정 범위를 벗어나는 날짜에 대해서 선택 불가능할지에 대한 여부 */
  hasRangeRestriction?: boolean;
  /** 최대로 선택할 수 있는 날짜 범위 */
  maxDateRange?: number;
  /** 현재 선택된 날짜 */
  selectedDate?: number;
  /** 특정 날짜를 선택했을 때 실행할 함수 */
  onDateClick?: CallableFunction;
}

const Calendar = ({
  currentDate,
  yearMonthData,
  dateRange,
  isFutureDaysRestricted,
  hasRangeRestriction,
  maxDateRange,
  selectedDate,
  onDateClick,
}: CalendarProps) => {
  const dayBoxSize = useMemo(() => getDayBoxSize(yearMonthData), []);

  return (
    <div css={containerStyle}>
      <header css={headerStyle}>
        <Heading size="xSmall">
          {yearMonthData.year}.{yearMonthData.month}
        </Heading>
      </header>
      <section css={[dayContainerStyle, dayOfWeekContainerStyle]}>
        {DAYS_OF_WEEK.map((day) => (
          <Day key={day} day={day} />
        ))}
      </section>
      <section css={dayContainerStyle}>
        {Array.from({ length: dayBoxSize }, (_, index) => {
          const { date, isNotDay, dateString, isToday, isSelected, isInRange, isRestricted } =
            getDayInfo({
              index,
              yearMonthData,
              currentDate,
              dateRange,
              maxDateRange,
              isFutureDaysRestricted,
              hasRangeRestriction,
              selectedDate,
            });

          return isNotDay ? (
            <Day key={index} />
          ) : (
            <Day
              key={dateString}
              day={date}
              isToday={isToday}
              isSelected={isSelected}
              isInRange={isInRange}
              isDisabled={isRestricted}
              onClick={onDateClick?.(date, yearMonthData)}
            />
          );
        })}
      </section>
    </div>
  );
};

export default Calendar;
