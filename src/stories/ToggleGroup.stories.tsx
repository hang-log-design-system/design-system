import useSelect from '@/hooks/useSelect';
import SearchIcon from '@assets/svg/search-icon.svg';
import { containerStyle, informationStyle } from '@stories/styles';
import type { Meta, StoryObj } from '@storybook/react';

import Toggle from '@components/Toggle/Toggle';
import ToggleGroup from '@components/ToggleGroup/ToggleGroup';

const meta = {
  title: 'ToggleGroup',
  component: ToggleGroup,
  decorators: [
    (Story) => (
      <ul css={containerStyle}>
        <Story />
      </ul>
    ),
  ],
} satisfies Meta<typeof ToggleGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variants: Story = {
  render: ({}) => {
    const { selected, handleSelectClick } = useSelect();
    return (
      <>
        <li css={informationStyle}>
          <h6>Toggle Group and Toggle</h6>
          <ToggleGroup>
            <Toggle
              text="toggle1"
              toggleId="toggle1"
              selectedId={selected}
              changeSelect={handleSelectClick}
            />
            <Toggle
              text="toggle2"
              toggleId="toggle2"
              selectedId={selected}
              changeSelect={handleSelectClick}
            />
            <Toggle
              text="toggle3"
              toggleId="toggle3"
              selectedId={selected}
              changeSelect={handleSelectClick}
            />
            <Toggle
              text="toggle4"
              toggleId="toggle4"
              selectedId={selected}
              changeSelect={handleSelectClick}
            />
            <Toggle
              text="toggle5"
              toggleId="toggle5"
              selectedId={selected}
              changeSelect={handleSelectClick}
            />
          </ToggleGroup>
        </li>
      </>
    );
  },
};
