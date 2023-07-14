import { containerStyle, informationStyle } from '@stories/styles';
import type { Meta, StoryObj } from '@storybook/react';

import useSelect from '@hooks/useSelect';

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
    const outlineSelector = useSelect();
    const selectedOutline = outlineSelector.selected;
    const handleSelectOutline = outlineSelector.handleSelectClick;

    const blockSelector = useSelect();
    const selectedblock = blockSelector.selected;
    const handleSelectblock = blockSelector.handleSelectClick;

    const outlineSelectorOverflow = useSelect();
    const selectedoutlineoverflow = outlineSelectorOverflow.selected;
    const handleSelectoutlineOverflow = outlineSelectorOverflow.handleSelectClick;

    return (
      <>
        <li css={informationStyle}>
          <h6>outline</h6>
          <Tabs>
            <Tab
              text="Tab1"
              variant="outline"
              tabId="Tab1"
              changeSelect={handleSelectOutline}
              selectedId={selectedOutline}
            />
            <Tab
              text="Tab1"
              variant="outline"
              tabId="Tab2"
              changeSelect={handleSelectOutline}
              selectedId={selectedOutline}
            />
          </Tabs>
        </li>
        <li css={informationStyle}>
          <h6>block</h6>
          <Tabs>
            <Tab
              text="Tab1"
              variant="block"
              tabId="Tab1"
              changeSelect={handleSelectblock}
              selectedId={selectedblock}
            />
            <Tab
              text="Tab2"
              variant="block"
              tabId="Tab2"
              changeSelect={handleSelectblock}
              selectedId={selectedblock}
            />
          </Tabs>
        </li>
        <li css={informationStyle}>
          <h6>overflow-outline</h6>
          <Tabs>
            <Tab
              text="Tab1"
              variant="outline"
              tabId="Tab1"
              changeSelect={handleSelectoutlineOverflow}
              selectedId={selectedoutlineoverflow}
            />
            <Tab
              text="Tab2"
              variant="outline"
              tabId="Tab2"
              changeSelect={handleSelectoutlineOverflow}
              selectedId={selectedoutlineoverflow}
            />
            <Tab
              text="Tab3"
              variant="outline"
              tabId="Tab3"
              changeSelect={handleSelectoutlineOverflow}
              selectedId={selectedoutlineoverflow}
            />
            <Tab
              text="Tab4"
              variant="outline"
              tabId="Tab4"
              changeSelect={handleSelectoutlineOverflow}
              selectedId={selectedoutlineoverflow}
            />
            <Tab
              text="Tab5"
              variant="outline"
              tabId="Tab5"
              changeSelect={handleSelectoutlineOverflow}
              selectedId={selectedoutlineoverflow}
            />
            <Tab
              text="Tab6"
              variant="outline"
              tabId="Tab6"
              changeSelect={handleSelectoutlineOverflow}
              selectedId={selectedoutlineoverflow}
            />
            <Tab
              text="Tab7"
              variant="outline"
              tabId="Tab7"
              changeSelect={handleSelectoutlineOverflow}
              selectedId={selectedoutlineoverflow}
            />
            <Tab
              text="Tab8"
              variant="outline"
              tabId="Tab8"
              changeSelect={handleSelectoutlineOverflow}
              selectedId={selectedoutlineoverflow}
            />
            <Tab
              text="Tab9"
              variant="outline"
              tabId="Tab9"
              changeSelect={handleSelectoutlineOverflow}
              selectedId={selectedoutlineoverflow}
            />
            <Tab
              text="Tab10"
              variant="outline"
              tabId="Tab10"
              changeSelect={handleSelectoutlineOverflow}
              selectedId={selectedoutlineoverflow}
            />
            <Tab
              text="Tab11"
              variant="outline"
              tabId="Tab11"
              changeSelect={handleSelectoutlineOverflow}
              selectedId={selectedoutlineoverflow}
            />
            <Tab
              text="Tab12"
              variant="outline"
              tabId="Tab12"
              changeSelect={handleSelectoutlineOverflow}
              selectedId={selectedoutlineoverflow}
            />
            <Tab
              text="Tab13"
              variant="outline"
              tabId="Tab13"
              changeSelect={handleSelectoutlineOverflow}
              selectedId={selectedoutlineoverflow}
            />
            <Tab
              text="Tab14"
              variant="outline"
              tabId="Tab14"
              changeSelect={handleSelectoutlineOverflow}
              selectedId={selectedoutlineoverflow}
            />
            <Tab
              text="Tab15"
              variant="outline"
              tabId="Tab15"
              changeSelect={handleSelectoutlineOverflow}
              selectedId={selectedoutlineoverflow}
            />
            <Tab
              text="Tab16"
              variant="outline"
              tabId="Tab16"
              changeSelect={handleSelectoutlineOverflow}
              selectedId={selectedoutlineoverflow}
            />
            <Tab
              text="Tab17"
              variant="outline"
              tabId="Tab17"
              changeSelect={handleSelectoutlineOverflow}
              selectedId={selectedoutlineoverflow}
            />
            <Tab
              text="Tab18"
              variant="outline"
              tabId="Tab18"
              changeSelect={handleSelectoutlineOverflow}
              selectedId={selectedoutlineoverflow}
            />
            <Tab
              text="Tab19"
              variant="outline"
              tabId="Tab19"
              changeSelect={handleSelectoutlineOverflow}
              selectedId={selectedoutlineoverflow}
            />
            <Tab
              text="Tab20"
              variant="outline"
              tabId="Tab20"
              changeSelect={handleSelectoutlineOverflow}
              selectedId={selectedoutlineoverflow}
            />
            <Tab
              text="Tab21"
              variant="outline"
              tabId="Tab21"
              changeSelect={handleSelectoutlineOverflow}
              selectedId={selectedoutlineoverflow}
            />
            <Tab
              text="Tab22"
              variant="outline"
              tabId="Tab22"
              changeSelect={handleSelectoutlineOverflow}
              selectedId={selectedoutlineoverflow}
            />
            <Tab
              text="Tab23"
              variant="outline"
              tabId="Tab23"
              changeSelect={handleSelectoutlineOverflow}
              selectedId={selectedoutlineoverflow}
            />
            <Tab
              text="Tab24"
              variant="outline"
              tabId="Tab24"
              changeSelect={handleSelectoutlineOverflow}
              selectedId={selectedoutlineoverflow}
            />
            <Tab
              text="Tab25"
              variant="outline"
              tabId="Tab25"
              changeSelect={handleSelectoutlineOverflow}
              selectedId={selectedoutlineoverflow}
            />
          </Tabs>
        </li>
      </>
    );
  },
};
