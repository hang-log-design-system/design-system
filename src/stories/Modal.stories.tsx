import SampleImage from '@assets/svg/modal-sample.svg';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import Button from '@components/Button/Button';
import Heading from '@components/Heading/Heading';
import Modal from '@components/Modal/Modal';
import Text from '@components/Text/Text';

import { containerStyle } from './styles';

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

export const ImageModal: Story = {
  render: ({ ...args }) => {
    const [showModal, setShowModal] = useState(false);

    return (
      <>
        <Button onClick={() => setShowModal(true)}>Show Modal</Button>
        <Modal {...args} isOpen={showModal} closeModal={() => setShowModal(false)}>
          <div css={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Heading size="large">Title</Heading>
            <SampleImage />
            <Button variant="primary" onClick={() => setShowModal(false)} css={{ width: '100%' }}>
              확인
            </Button>
          </div>
        </Modal>
      </>
    );
  },
};

export const NoCloseButton: Story = {
  render: ({ ...args }) => {
    const [showModal, setShowModal] = useState(false);

    return (
      <>
        <Button onClick={() => setShowModal(true)}>Show Modal</Button>
        <Modal
          {...args}
          isOpen={showModal}
          closeModal={() => setShowModal(false)}
          hasCloseButton={false}
        >
          <div css={containerStyle}>
            <Heading size="large">Title</Heading>
            <Text>Sample Text</Text>
            <Button variant="primary" onClick={() => setShowModal(false)} css={{ width: '100%' }}>
              확인
            </Button>
          </div>
        </Modal>
      </>
    );
  },
};

export const TextModal: Story = {
  render: ({ ...args }) => {
    const [showModal, setShowModal] = useState(false);

    return (
      <>
        <Button onClick={() => setShowModal(true)}>Show Modal</Button>
        <Modal {...args} isOpen={showModal} closeModal={() => setShowModal(false)}>
          <div css={[containerStyle, { width: '350px' }]}>
            <Heading size="large">Title</Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum
            </Text>
            <div css={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
              <Button variant="default" onClick={() => setShowModal(false)} css={{ width: '45%' }}>
                Close
              </Button>
              <Button variant="primary" onClick={() => setShowModal(false)} css={{ width: '45%' }}>
                Action
              </Button>
            </div>
          </div>
        </Modal>
      </>
    );
  },
};
