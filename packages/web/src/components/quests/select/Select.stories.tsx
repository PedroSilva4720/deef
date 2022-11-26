import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Select } from './Select';

export default {
  title: 'Select',
  component: Select,
} as ComponentMeta<typeof Select>;

export const Primary: ComponentStory<typeof Select> = ({ options, label }) => (
  <Select options={options} label={label}></Select>
);

Primary.args = {
  options: [],
  label: '',
};
