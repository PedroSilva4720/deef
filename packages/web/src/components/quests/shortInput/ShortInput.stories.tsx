import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ShortInput } from './ShortInput';

export default {
  title: 'ShortInput',
  component: ShortInput,
  parameters: {
    docs: {
      description: {
        component:
          'Componente baseado no Input padrão do html, que recebe como parâmetro  "label", que é utilizado como rótulo do input; "placeholder" que é o valor padrão mostrado no componente; "displayLabel" para escolher se o rótulo aparece em tela e "setFunction", uma função para salvar o valor do componente.',
      },
    },
  },
} as ComponentMeta<typeof ShortInput>;

export const Primary: ComponentStory<typeof ShortInput> = ({
  placeholder,
  label,
  setFunction,
  displayLabel,
}) => (
  <ShortInput
    label={label}
    placeholder={placeholder}
    setFunction={setFunction}
    displayLabel={displayLabel}
  ></ShortInput>
);

Primary.args = {
  label: 'ShortInput Label',
  placeholder: 'what is your favorite animal?',
  setFunction: value => console.log(value),
  displayLabel: false,
};
