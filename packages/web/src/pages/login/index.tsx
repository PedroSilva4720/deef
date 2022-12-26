import React, { useState } from 'react';
import { Button } from '../../components/button/Button';
import { ShortInput } from '../../components/quests/shortInput/ShortInput';
import { Footer } from '../../modules/footer/footer';
import * as LoginComponents from './styles';

export const LoginPage: React.FC = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <>
      <LoginComponents.Container>
        <LoginComponents.Form>
          <ShortInput
            label='Email'
            displayLabel
            type='email'
            setFunction={setEmail}
          />
          <ShortInput
            label='Senha'
            displayLabel
            type='password'
            setFunction={setPassword}
          />
          <Button type='submit' variant='grass' placeholder='Login' />
        </LoginComponents.Form>
      </LoginComponents.Container>
      <Footer />
    </>
  );
};
