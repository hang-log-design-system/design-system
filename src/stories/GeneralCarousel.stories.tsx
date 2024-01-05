import icon1 from '@assets/svg/add-icon.svg';
import icon2 from '@assets/svg/checked-icon.svg';
import icon3 from '@assets/svg/empty-star.svg';
import type { Meta, StoryObj } from '@storybook/react';

import GeneralCarousel from '@components/GeneralCarousel/GeneralCarousel';

const meta = {
  title: 'GeneralCarousel',
  component: GeneralCarousel,
  argTypes: {
    width: { control: 'number' },
    height: { control: 'number' },
    items: { control: false },
  },
  args: {
    width: 300,
    height: 200,
  },
} satisfies Meta<typeof GeneralCarousel>;

export default meta;
type Story = StoryObj<typeof GeneralCarousel>;

const items = [icon2, icon1, icon3];
const items2 = [
  'https://www.shutterstock.com/image-photo/red-apple-isolated-on-white-260nw-1727544364.jpg',
  'https://www.shutterstock.com/image-photo/red-apple-isolated-on-white-260nw-1727544364.jpg',
  'https://www.shutterstock.com/image-photo/red-apple-isolated-on-white-260nw-1727544364.jpg',
];

export const Default: Story = {
  render: ({ ...args }) => {
    return <GeneralCarousel {...args} items={items2} />;
  },
};

export const WithArrowButtons: Story = {
  render: ({ ...args }) => {
    return <GeneralCarousel {...args} items={items} />;
  },
  args: {},
};

export const WithDots: Story = {
  render: ({ ...args }) => {
    return <GeneralCarousel {...args} items={items} />;
  },
  args: {},
};

export const ShowNavigationOnHover: Story = {
  render: ({ ...args }) => {
    return <GeneralCarousel {...args} items={items} />;
  },
  args: {},
};
