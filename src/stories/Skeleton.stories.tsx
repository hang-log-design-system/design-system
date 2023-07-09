import type { Meta, StoryObj } from '@storybook/react';

import Skeleton from '@components/Skeleton/Skeleton';

const meta = {
  title: 'Skeleton',
  component: Skeleton,
  args: {
    width: '500px',
    height: '24px',
  },
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Default: Story = {
  argTypes: {
    width: { control: false },
    height: { control: false },
    variant: { control: false },
  },
};

export const Image: Story = {
  args: {
    width: '450px',
    height: '300px',
  },
  argTypes: {
    width: { control: false },
    height: { control: false },
  },
};

export const Paragraph: Story = {
  args: {
    width: '400px',
    height: '100px',
  },
  argTypes: {
    width: { control: false },
    height: { control: false },
  },
};

export const Circle: Story = {
  args: {
    width: '200px',
    height: '200px',
    variant: 'circle',
  },
  argTypes: {
    width: { control: false },
    height: { control: false },
    variant: { control: false },
  },
};
