import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Rate } from './Rate';

export default {
  title: 'Rate',
  component: Rate,
} as ComponentMeta<typeof Rate>;

export const Primary: ComponentStory<typeof Rate> = ({ label }) => (
  <Rate label={label}></Rate>
);

Primary.args = {
  label: '',
};
