import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    placeholder: {
      description: 'Text inside button',
      type: { name: 'string', required: true },
      control: { type: 'text' },
      defaultValue: 'Button',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Botão padrão para interação com o usuário',
      },
    },
  },
} as ComponentMeta<typeof Button>;

export const Grass: ComponentStory<typeof Button> = ({ placeholder }) => (
  <Button placeholder={placeholder}></Button>
);
export const Mauve: ComponentStory<typeof Button> = ({ placeholder }) => (
  <Button variant='mauve' placeholder={placeholder}></Button>
);
export const Red: ComponentStory<typeof Button> = ({ placeholder }) => (
  <Button variant='red' placeholder={placeholder}></Button>
);
