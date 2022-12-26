import React from 'react';
import * as FooterComponents from './styles';

export const Footer: React.FC = () => {
  return (
    <FooterComponents.FooterContainer>
      <FooterComponents.Text>
        Feito com 💚 por <a href='http://andoras.com.br'>Andoras</a>
      </FooterComponents.Text>
      <FooterComponents.Text>Todos os direito reservados</FooterComponents.Text>
    </FooterComponents.FooterContainer>
  );
};
