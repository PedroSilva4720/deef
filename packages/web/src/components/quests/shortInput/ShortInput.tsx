import React from 'react';
import * as ShortInputComponents from './styles';
import { v4 as uuidV4 } from 'uuid';
import { ShortInputProps } from './shortInput.d';

export const ShortInput: React.FC<ShortInputProps> = ({
  placeholder,
  label,
  displayLabel = false,
  setFunction,
  ...props
}) => {
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
        {...props}
      />
    </ShortInputComponents.ShortInputContainer>
  );
};
