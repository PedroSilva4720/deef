import React from 'react';
import * as ShortInputComponents from './styles';
import { v4 as uuidV4 } from 'uuid';

export const ShortInput: React.FC<{
  placeholder: string;
  label: string;
  displayLabel: boolean;
  setFunction: (value: string) => void;
}> = ({ placeholder, label, displayLabel = false, setFunction }) => {
  const uuid = uuidV4();

  return (
    <ShortInputComponents.ShortInputContainer>
      <ShortInputComponents.ShortInputLabel
        htmlFor={uuid}
        style={displayLabel ? { display: 'block' } : { display: 'none' }}
      >
        {label}
      </ShortInputComponents.ShortInputLabel>
      <ShortInputComponents.ShortInputInput
        onChange={event => setFunction(event.target.value)}
        id={uuid}
        placeholder={placeholder}
      />
    </ShortInputComponents.ShortInputContainer>
  );
};
