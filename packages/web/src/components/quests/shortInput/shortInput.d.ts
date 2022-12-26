import { InputHTMLAttributes } from 'react';

export interface ShortInputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  label: string;
  displayLabel?: boolean;
  setFunction: function;
}
