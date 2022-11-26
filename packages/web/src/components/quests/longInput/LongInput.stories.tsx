import { ComponentStory, ComponentMeta } from '@storybook/react';

import { LongInput } from './LongInput';

export default {
  title: 'LongInput',
  component: LongInput,
} as ComponentMeta<typeof LongInput>;

export const Primary: ComponentStory<typeof LongInput> = ({
  label,
  placeholder,
}) => <LongInput label={label} placeholder={placeholder}></LongInput>;

Primary.args = {
  label: '',
  placeholder: '',
};
