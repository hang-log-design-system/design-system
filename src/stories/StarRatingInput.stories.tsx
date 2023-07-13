import type { Meta, StoryObj } from '@storybook/react';

import { useStarRating } from '@hooks/useStarRating';

import StarRatingInput from '@components/StarRatingInput/StarRatingInput';

const meta = {
  title: 'StarRatingInput',
  component: StarRatingInput,
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
} satisfies Meta<typeof StarRatingInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: ({ size, gap }) => {
    const { starRate, handleStarClick, handleStarHover, handleStarHoverOut } = useStarRating(0);

    return (
      <StarRatingInput
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
