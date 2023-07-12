import type { Meta, StoryObj } from '@storybook/react';

import StarRating from '@components/StarRating/StarRating';

const meta = {
  title: 'StarRating',
  component: StarRating,
  argTypes: {
    rate: {
      control: { type: 'radio' },
      options: [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5],
      description: '별점',
    },
    size: {
      control: { type: 'number' },
      description: 'size',
    },
    gap: {
      control: { type: 'number' },
      description: 'gap',
    },
  },
  args: {
    rate: 2.5,
    size: 24,
    gap: 2,
    onStarClick: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {},
  },
} satisfies Meta<typeof StarRating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
