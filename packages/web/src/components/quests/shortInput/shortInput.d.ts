import React from 'react';
import { InputHTMLAttributes } from 'react';

export interface ShortInputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  label: string;
  displayLabel?: boolean;
  name: string;
  setFunction: React.Dispatch<React.SetStateAction<any>>;
}
