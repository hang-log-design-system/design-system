import SampleImage from '@assets/svg/modal-sample.svg';
import type { Meta, StoryObj } from '@storybook/react';

import Button from '@components/Button/Button';
import Heading from '@components/Heading/Heading';
import Modal from '@components/Modal/Modal';
import Text from '@components/Text/Text';

const meta = {
  title: 'Modal',
  component: Modal,
  argTypes: {
    children: {
      control: { type: 'text' },
    },
  },
  args: {
    children: 'Modal',
    isOpen: false,
    hasCloseButton: true,
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextModal: Story = {
  args: {
    children: (
      <>
        <Heading>Title</Heading>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </Text>
      </>
    ),
  },
  argTypes: {
    children: {
      control: false,
    },
  },
};

export const ImageModal: Story = {
  args: {
    children: (
      <>
        <Heading>Title</Heading>
        <SampleImage />
      </>
    ),
  },
  argTypes: {
    children: {
      control: false,
    },
  },
};

export const TextWithButton: Story = {
  args: {
    children: (
      <>
        <Heading>Text with Button</Heading>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </Text>
        <div css={{ display: 'flex', width: '50%', justifyContent: 'space-between' }}>
          <Button>취소</Button>
          <Button variant="primary">확인</Button>
        </div>
      </>
    ),
  },
  argTypes: {
    children: {
      control: false,
    },
  },
};
