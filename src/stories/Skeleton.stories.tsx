import type { Meta, StoryObj } from '@storybook/react';

import Skeleton from '@components/Skeleton/Skeleton';

const meta = {
  title: 'Skeleton',
  component: Skeleton,
  args: {
    width: '100px',
    height: '30px',
  },
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
