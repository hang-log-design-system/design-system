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
            <Toggle text="haha" selected />
            <Toggle text="ganada" />
            <Toggle text="hahaha" />
            <Toggle text="ho" />
            <Toggle text="aha" />
          </ToggleGroup>
        </li>
      </>
    );
  },
};
