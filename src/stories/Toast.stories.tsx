import CheckCircleIcon from '@assets/svg/check-circle-icon.svg';
import { containerStyle, informationStyle } from '@stories/styles';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import Button from '@components/Button/Button';
import Toast from '@components/Toast/Toast';
import ToastContainer from '@components/ToastContainer/ToastContainer';

const meta = {
  title: 'Toast',
  component: Toast,
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['default', 'success', 'error'],
    },
    hasCloseButton: {
      control: { type: 'boolean' },
    },
    showDuration: {
      control: { type: 'number' },
    },
  },
  args: {
    variant: 'default',
    hasCloseButton: false,
    showDuration: 5000,
    children: 'Some message',
  },
  decorators: [
    (Story) => (
      <ul css={containerStyle}>
        <ToastContainer />
        <Story />
      </ul>
    ),
  ],
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variants: Story = {
  render: ({ children, variant, ...args }) => {
    const [show, setShow] = useState(false);

    setTimeout(() => {
      setShow(true);
    }, 300);

    return (
      <div id="toast-container">
        {show && (
          <>
            <Toast variant="default" {...args}>
              {children}
            </Toast>
            <Toast variant="success" {...args}>
              {children}
            </Toast>
            <Toast variant="error" {...args}>
              {children}
            </Toast>
          </>
        )}
      </div>
    );
  },
  argTypes: {
    variant: {
      control: false,
    },
  },
  args: {
    showDuration: 100000,
  },
};

export const Default: Story = {
  render: ({ children, ...args }) => {
    const [showToast, setShowToast] = useState(false);

    return (
      <>
        <Button onClick={() => setShowToast(true)}>Show Toast</Button>
        {showToast && (
          <Toast {...args} closeToast={() => setShowToast(false)}>
            {children}
          </Toast>
        )}
      </>
    );
  },
};

export const Success: Story = {
  render: ({ children, ...args }) => {
    const [showToast, setShowToast] = useState(false);

    return (
      <>
        <Button onClick={() => setShowToast(true)}>Show Toast</Button>
        {showToast && (
          <Toast {...args} closeToast={() => setShowToast(false)}>
            {children}
          </Toast>
        )}
      </>
    );
  },
  args: {
    variant: 'success',
  },
};

export const Error: Story = {
  render: ({ children, ...args }) => {
    const [showToast, setShowToast] = useState(false);

    return (
      <>
        <Button onClick={() => setShowToast(true)}>Show Toast</Button>
        {showToast && (
          <Toast {...args} closeToast={() => setShowToast(false)}>
            {children}
          </Toast>
        )}
      </>
    );
  },
  args: {
    variant: 'error',
  },
};

export const ClosableToast: Story = {
  render: ({ children, ...args }) => {
    const [showToast, setShowToast] = useState(false);

    return (
      <>
        <Button onClick={() => setShowToast(true)}>Show Toast</Button>
        {showToast && (
          <Toast {...args} closeToast={() => setShowToast(false)}>
            {children}
          </Toast>
        )}
      </>
    );
  },
  args: {
    hasCloseButton: true,
  },
};

export const withIcon: Story = {
  render: ({ children, ...args }) => {
    const [showToast, setShowToast] = useState(false);

    return (
      <>
        <Button onClick={() => setShowToast(true)}>Show Toast</Button>
        {showToast && (
          <Toast {...args} closeToast={() => setShowToast(false)}>
            <CheckCircleIcon />
            Message
          </Toast>
        )}
      </>
    );
  },
  args: {
    hasCloseButton: true,
    showDuration: 1000000,
  },
  name: 'Toast with Icon',
};

export const PilingToast: Story = {
  render: ({ children, ...args }) => {
    const [showToast1, setShowToast1] = useState(false);
    const [showToast2, setShowToast2] = useState(false);

    return (
      <>
        <Button onClick={() => setShowToast1(true)}>Show Toast 1</Button>
        {showToast1 && (
          <Toast {...args} closeToast={() => setShowToast1(false)}>
            {children}
          </Toast>
        )}
        <Button onClick={() => setShowToast2(true)}>Show Toast 2</Button>
        {showToast2 && (
          <Toast {...args} closeToast={() => setShowToast2(false)}>
            {children}
          </Toast>
        )}
      </>
    );
  },
  args: {
    hasCloseButton: true,
  },
};
