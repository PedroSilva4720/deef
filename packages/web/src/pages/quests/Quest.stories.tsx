import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Quest } from '.';

export default {
  title: 'pages/Quest',
  component: Quest,
  parameters: {
    docs: {
      description: {
        component: 'Página de Login',
      },
    },
  },
} as ComponentMeta<typeof Quest>;

export const Primary: ComponentStory<typeof Quest> = () => <Quest />;
