import { ComponentStory, ComponentMeta } from '@storybook/react';

import { LongInput } from './LongInput';

export default {
  title: 'LongInput',
  component: LongInput,
  parameters: {
    docs: {
      description: {
        component: '',
      },
    },
  },
} as ComponentMeta<typeof LongInput>;

export const Primary: ComponentStory<typeof LongInput> = ({
  placeholder,
  label,
  setFunction,
  displayLabel,
}) => (
  <LongInput
    label={label}
    placeholder={placeholder}
    setFunction={setFunction}
    displayLabel={displayLabel}
  ></LongInput>
);

Primary.args = {
  label: 'LongInput Label',
  placeholder: 'Tell me about your cat',
  setFunction: value => console.log(value),
  displayLabel: false,
};
