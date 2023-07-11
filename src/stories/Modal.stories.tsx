import SampleImage from '@assets/svg/modal-sample.svg';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import Button from '@components/Button/Button';
import Heading from '@components/Heading/Heading';
import Modal from '@components/Modal/Modal';
import Text from '@components/Text/Text';

const meta = {
  title: 'Modal',
  component: Modal,
  argTypes: {
    children: {
      control: false,
    },
  },
  args: {
    isOpen: false,
    hasCloseButton: true,
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: ({ ...args }) => {
    const [showModal, setShowModal] = useState(false);

    return (
      <>
        <Button onClick={() => setShowModal(true)}>Show Modal</Button>
        <Modal {...args} isOpen={showModal} closeModal={() => setShowModal(false)}>
          <Heading>Title</Heading>
          <SampleImage />
          <Text>Sample Text</Text>
          <Button variant="primary" onClick={() => setShowModal(false)} css={{ width: '100%' }}>
            확인
          </Button>
        </Modal>
      </>
    );
  },
};
