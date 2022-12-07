import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Select } from './Select';

export default {
  title: 'Select',
  component: Select,
} as ComponentMeta<typeof Select>;

export const Primary: ComponentStory<typeof Select> = ({
  options,
  label,
  placeholder,
  setFunction,
  displayLabel,
}) => (
  <Select
    options={options}
    label={label}
    placeholder={placeholder}
    setFunction={setFunction}
    displayLabel={displayLabel}
  ></Select>
);

Primary.args = {
  options: ['Apple', 'Banana', 'Orange'],
  label: 'Select Input',
  placeholder: 'Choose a fruit',
  setFunction: value => console.log(value),
  displayLabel: false,
};
