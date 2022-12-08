import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Rate } from './Rate';

export default {
  title: 'Rate',
  component: Rate,
  parameters: {
    docs: {
      description: {
        component:
          'Componente de avaliação, onde o usuário deve escolher uma nota entre 1 e 10. O componente recebe como parâmetro "label", que é utilizado como rótulo de rate; "displayLabel" para escolher se o rótulo aparece em tela e "setFunction", uma função para salvar o valor do componente.',
      },
    },
  },
} as ComponentMeta<typeof Rate>;

export const Primary: ComponentStory<typeof Rate> = ({
  label,
  setFunction,
  displayLabel,
}) => (
  <Rate
    label={label}
    setFunction={setFunction}
    displayLabel={displayLabel}
  ></Rate>
);

Primary.args = {
  label: 'Rate Input',
  setFunction: value => console.log(value),
  displayLabel: false,
};
