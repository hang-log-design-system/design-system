import {
  dayContainerStyle,
  dayStyling,
  getDayInRangeStyling,
  getDisabledDayStyling,
  getSelectedDayStyling,
  getTodayStyle,
} from '@components/Calendar/Day/Day.style';

interface DayProps {
  /** 날짜 */
  day?: number | string;
  /** 날짜가 오늘인지에 대한 여부 */
  isToday?: boolean;
  /** 날짜가 선택되었는지에 대한 여부 */
  isSelected?: boolean;
  /** 날짜가 선택된 날짜 범위 안에 있는에 대한 여부 */
  isInRange?: boolean;
  /** 날짜 선택이 불가능한지에 대한 여부 */
  isDisabled?: boolean;
  /** 날짜를 클릭하면 발생할 이벤트 */
  onClick?: () => void;
}

const Day = ({
  day,
  isToday = false,
  isSelected = false,
  isInRange = false,
  isDisabled = false,
  onClick,
}: DayProps) => {
  return (
    <div css={dayContainerStyle}>
      {day && (
        <span
          css={[
            dayStyling,
            getTodayStyle(isToday),
            getDayInRangeStyling(isInRange),
            getSelectedDayStyling(isSelected),
            getDisabledDayStyling(isDisabled),
          ]}
          onClick={onClick}
        >
          {day}
        </span>
      )}
    </div>
  );
};

export default Day;
