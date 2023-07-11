import Box from '@/components/Box/Box';
import { containerStyle, informationStyle } from '@stories/styles';
import type { Meta, StoryObj } from '@storybook/react';

import Center from '@components/Center/Center';

const meta = {
  title: 'Center',
  component: Center,
  decorators: [
    (Story) => (
      <ul css={containerStyle}>
        <Story />
      </ul>
    ),
  ],
} satisfies Meta<typeof Center>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: () => {
    return (
      <Box styles={{ width: '500px', backgroundColor: '#dddddd' }}>
        <Center>
          <div style={{ width: '100px', backgroundColor: 'red' }}>box1</div>
        </Center>
      </Box>
    );
  },
};
