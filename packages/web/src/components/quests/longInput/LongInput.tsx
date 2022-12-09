import React from 'react';
import * as LongInputComponents from './styles';
import { v4 as uuidV4 } from 'uuid';

export const LongInput: React.FC<{
  placeholder: string;
  label: string;
  displayLabel: boolean;
  setFunction: (value: string) => void;
}> = ({ placeholder, label, displayLabel = false, setFunction }) => {
  const uuid = uuidV4();

  return (
    <LongInputComponents.LongInputContainer>
      <LongInputComponents.LongInputLabel
        htmlFor={uuid}
        style={displayLabel ? { display: 'block' } : { display: 'none' }}
      >
        {label}
      </LongInputComponents.LongInputLabel>
      <LongInputComponents.LongInputTextArea
        onChange={event => setFunction(event.target.value)}
        id={uuid}
        placeholder={placeholder}
      />
    </LongInputComponents.LongInputContainer>
  );
};
