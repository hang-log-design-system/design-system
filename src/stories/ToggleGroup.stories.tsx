import Toggle from '@/components/Toggle/Toggle';
import SearchIcon from '@assets/svg/search-icon.svg';
import { containerStyle, informationStyle } from '@stories/styles';
import type { Meta, StoryObj } from '@storybook/react';

import Tab from '@components/Tab/Tab';
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

export const Playground: Story = {};

export const Variants: Story = {
  render: ({}) => {
    return (
      <>
        <li css={informationStyle}>
          <h6>ToggleGroup and Toggle</h6>
          <ToggleGroup>
            <Toggle text="haha" selected />
            <Toggle text="ganada" />
            <Toggle text="hahaha" selected />
            <Toggle text="ho" />
            <Toggle text="aha" selected />
          </ToggleGroup>
        </li>
      </>
    );
  },
};
