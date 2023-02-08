import React, { useEffect, useState } from 'react';

import { Button } from '../../components/button/Button';
import { ShortInput } from '../../components/quests/shortInput/ShortInput';
import { Footer } from '../../modules/footer/footer';
import { LoadingLoginPage } from './index.loading';
import * as LoginComponents from './styles';

export const LoginPage: React.FC = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(false);
  }, []);
  return (
    <>
      {isLoading ? (
        <LoadingLoginPage />
      ) : (
        <>
          <LoginComponents.Container>
            <LoginComponents.Form>
              <h1>Login</h1>
              <p>Faça login para acessar a página de administrador</p>
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
      )}
    </>
  );
};
