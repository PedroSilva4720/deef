import React from 'react';
import { SubmitButtonProps } from './button.d';
import * as ButtonComponent from './styles';

export const Button: React.FC<SubmitButtonProps> = ({
  variant,
  placeholder,
  ...props
}) => {
  return (
    <ButtonComponent.HTMLButton variant={variant} {...props}>
      {placeholder}
    </ButtonComponent.HTMLButton>
  );
};
