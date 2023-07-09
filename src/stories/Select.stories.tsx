import { containerStyle, informationStyle } from '@stories/styles';
import type { Meta, StoryObj } from '@storybook/react';

import Select from '@components/Select/Select';

const meta = {
  title: 'Select',
  component: Select,
  argTypes: {
    label: {
      control: { type: 'text' },
      description: 'Select의 시이즈',
    },
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
      description: 'Select의 시이즈',
    },
    isError: {
      control: { type: 'boolean' },
      description: 'Select 인풋의 에러 여부',
    },
    supportingText: {
      control: { type: 'text' },
      description: 'Select의 부가 정보 텍스트',
    },
    required: {
      control: { type: 'boolean' },
      description: 'Select의 필수 입력 여부',
    },
    children: {
      description: 'Select에서 선택할 수 있는 JSX option 요소들',
    },
  },
  args: {
    size: 'medium',
    isError: false,
    required: false,
    children: [
      <option value="option1">option 1</option>,
      <option value="option2">option 2</option>,
      <option value="option3">option 3</option>,
    ],
  },
  decorators: [
    (Story) => (
      <ul css={containerStyle}>
        <Story />
      </ul>
    ),
  ],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Sizes: Story = {
  render: ({ isError, placeholder, children }) => {
    return (
      <>
        <li css={informationStyle}>
          <h6>Small</h6>
          <Select size="small" isError={isError} placeholder={placeholder}>
            {children}
          </Select>
        </li>
        <li css={informationStyle}>
          <h6>Medium</h6>
          <Select isError={isError} placeholder={placeholder}>
            {children}
          </Select>
        </li>
        <li css={informationStyle}>
          <h6>Large</h6>
          <Select size="large" isError={isError} placeholder={placeholder}>
            {children}
          </Select>
        </li>
      </>
    );
  },
  argTypes: {
    size: {
      control: false,
    },
  },
};

export const withLabel: Story = {
  args: {
    label: 'Label',
  },
  name: 'Select with Label',
};

export const withSupportingText: Story = {
  args: {
    supportingText: 'Supporting Text',
  },
  name: 'Select with Supporting Text',
};

export const withLabelAndSupportingText: Story = {
  args: {
    label: 'Label',
    supportingText: 'Supporting Text',
    required: true,
  },
  name: 'Select with Label and Supporting Text',
};
