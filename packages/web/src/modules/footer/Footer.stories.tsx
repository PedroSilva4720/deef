import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Footer } from './footer';

export default {
  title: 'modules/Footer',
  component: Footer,
  parameters: {
    docs: {
      description: {
        component: 'Página de Login',
      },
    },
  },
} as ComponentMeta<typeof Footer>;

export const Primary: ComponentStory<typeof Footer> = () => <Footer />;
