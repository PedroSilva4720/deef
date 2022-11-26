import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ShortInput } from './ShortInput';

export default {
  title: 'ShortInput',
  component: ShortInput,
} as ComponentMeta<typeof ShortInput>;

export const Primary: ComponentStory<typeof ShortInput> = ({
  placeholder,
  label,
}) => <ShortInput placeholder={placeholder} label={label}></ShortInput>;

Primary.args = {
  placeholder: '',
  label: '',
};
