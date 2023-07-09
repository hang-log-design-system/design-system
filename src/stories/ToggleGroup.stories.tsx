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
    return (
      <>
        <li css={informationStyle}>
          <h6>Toggle Group and Toggle</h6>
          <ToggleGroup>
            <Toggle text="toggle1" selected />
            <Toggle text="toggle2" />
            <Toggle text="toggle3" />
            <Toggle text="toggle4" />
            <Toggle text="toggle5" />
          </ToggleGroup>
        </li>
      </>
    );
  },
};
