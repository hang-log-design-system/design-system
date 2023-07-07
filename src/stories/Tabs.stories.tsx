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

export const Playground: Story = {};

export const Variants: Story = {
  render: ({}) => {
    return (
      <>
        <li css={informationStyle}>
          <h6>outline</h6>
          <Tabs>
            <Tab text="asdf" type="outline" selected={true} />
            <Tab text="asdf" type="outline" />
          </Tabs>
        </li>
        <li css={informationStyle}>
          <h6>block</h6>
          <Tabs>
            <Tab text="asdf" type="block" selected={true} />
            <Tab text="asdf" type="block" />
          </Tabs>
        </li>
        <li css={informationStyle}>
          <h6>overflow</h6>
          <Tabs>
            <Tab text="asdf" type="outline" selected={true} />
            <Tab text="asdf" type="outline" />
            <Tab text="asdf" type="block" selected={true} />
            <Tab text="asdf" type="block" />
            <Tab text="asdf" type="block" />
            <Tab text="asdf" type="block" />
            <Tab text="asdf" type="block" />
            <Tab text="asdf" type="block" />
            <Tab text="asdf" type="block" />
            <Tab text="asdf" type="block" />
            <Tab text="asdf" type="block" />
            <Tab text="asdf" type="block" />
            <Tab text="asdf" type="block" />
            <Tab text="asdf" type="block" />
            <Tab text="asdf" type="block" />
            <Tab text="asdf" type="block" />
            <Tab text="asdf" type="block" />
            <Tab text="asdf" type="block" />
            <Tab text="asdf" type="block" />
            <Tab text="asdf" type="block" />
            <Tab text="asdf" type="block" />
            <Tab text="asdf" type="block" />
            <Tab text="asdf" type="block" />
            <Tab text="asdf" type="block" />
            <Tab text="asdf" type="block" />
          </Tabs>
        </li>
      </>
    );
  },
};
