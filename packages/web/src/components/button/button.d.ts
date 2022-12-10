import { ButtonHTMLAttributes } from 'react';

export interface SubmitButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'grass' | 'red' | 'mauve';
  placeholder: string;
}
