import { ComponentStory, ComponentMeta } from '@storybook/react';

import { LoginPage } from './';

export default {
  title: 'pages/LoginPage',
  component: LoginPage,
  parameters: {
    docs: {
      description: {
        component: 'Página de Login',
      },
    },
  },
} as ComponentMeta<typeof LoginPage>;

export const Primary: ComponentStory<typeof LoginPage> = () => <LoginPage />;
