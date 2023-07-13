import type { Meta, StoryObj } from '@storybook/react';

import { useStarRating } from '@hooks/useStarRating';

import StarRating from '@components/StarRating/StarRating';

const meta = {
  title: 'StarRating',
  component: StarRating,
  argTypes: {
    rate: {
      control: false,
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
    rate: 1,
    size: 24,
    gap: 2,
  },
} satisfies Meta<typeof StarRating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: ({ size, gap }) => {
    const { starRate, handleStarClick, handleStarHover, handleStarHoverOut } = useStarRating(0);

    return (
      <StarRating
        rate={starRate}
        onStarClick={handleStarClick}
        onStarHover={handleStarHover}
        onStarHoverOut={handleStarHoverOut}
        size={size}
        gap={gap}
      />
    );
  },
};
