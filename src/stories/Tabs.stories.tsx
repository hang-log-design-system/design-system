import SearchIcon from '@assets/svg/search-icon.svg';
import { containerStyle, informationStyle } from '@stories/styles';
import type { Meta, StoryObj } from '@storybook/react';

import Tab from '@components/Tab/Tab';
import Tabs from '@components/Tabs/Tabs';

const meta = {
  title: 'Tabs',
  component: Tabs,
  decorators: [
    (Story) => (
      <ul css={containerStyle}>
        <Story />
      </ul>
    ),
  ],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variants: Story = {
  render: ({}) => {
    return (
      <>
        <li css={informationStyle}>
          <h6>outline</h6>
          <Tabs>
            <Tab text="Tab1" variant="outline" selected={true} />
            <Tab text="Tab1" variant="outline" />
          </Tabs>
        </li>
        <li css={informationStyle}>
          <h6>block</h6>
          <Tabs>
            <Tab text="Tab2" variant="block" selected={true} />
            <Tab text="Tab2" variant="block" />
          </Tabs>
        </li>
        <li css={informationStyle}>
          <h6>overflow</h6>
          <Tabs>
            <Tab text="Tab3" variant="outline" selected={true} />
            <Tab text="Tab3" variant="outline" />
            <Tab text="Tab3" variant="block" selected={true} />
            <Tab text="Tab3" variant="block" />
            <Tab text="Tab3" variant="block" />
            <Tab text="Tab3" variant="block" />
            <Tab text="Tab3" variant="block" />
            <Tab text="Tab3" variant="block" />
            <Tab text="Tab3" variant="block" />
            <Tab text="Tab3" variant="block" />
            <Tab text="Tab3" variant="block" />
            <Tab text="Tab3" variant="block" />
            <Tab text="Tab3" variant="block" />
            <Tab text="Tab3" variant="block" />
            <Tab text="Tab3" variant="block" />
            <Tab text="Tab3" variant="block" />
            <Tab text="Tab3" variant="block" />
            <Tab text="Tab3" variant="block" />
            <Tab text="Tab3" variant="block" />
            <Tab text="Tab3" variant="block" />
            <Tab text="Tab3" variant="block" />
            <Tab text="Tab3" variant="block" />
            <Tab text="Tab3" variant="block" />
            <Tab text="Tab3" variant="block" />
            <Tab text="Tab3" variant="block" />
          </Tabs>
        </li>
      </>
    );
  },
};
