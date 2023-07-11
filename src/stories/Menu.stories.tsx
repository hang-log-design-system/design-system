import type { Meta, StoryObj } from '@storybook/react';

import Menu from '@components/Menu/Menu';

const meta = {
  title: 'Menu',
  component: Menu,
  args: {
    title: 'Menu',
    menus: [
      { name: '로그인', onClick: () => {} },
      { name: '로그아웃', onClick: () => {} },
    ],
  },
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
