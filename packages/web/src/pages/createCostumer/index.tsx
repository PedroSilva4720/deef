import React from 'react';
import { useParams } from 'react-router-dom';

import { Button } from '../../components/button/Button';
import { ShortInput } from '../../components/quests/shortInput/ShortInput';
import * as CreateUserComponents from './styles';

export const CreateCostumer: React.FC = () => {
  const { company } = useParams();
  return (
    <>
      <CreateUserComponents.Form>
        <h1>Criar novo Feedback</h1>
        <p>Primeiro, identifique-se</p>
        <ShortInput
          type='text'
          label='Nome'
          setFunction={console.log}
          displayLabel
        />
        <ShortInput
          type='email'
          label='Email'
          setFunction={console.log}
          displayLabel
        />
        <ShortInput
          type='number'
          label='Telefone'
          setFunction={console.log}
          displayLabel
        />
        <Button placeholder='Enviar' />
      </CreateUserComponents.Form>
    </>
  );
};
