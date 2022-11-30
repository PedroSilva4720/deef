import React from 'react';
import * as LongInputComponents from './style';
import { v4 as uuidV4 } from 'uuid';

export const LongInput: React.FC<{ placeholder: string; label: string }> = ({
  placeholder,
  label,
}) => {
  const uuid = uuidV4();
  return (
    <LongInputComponents.LongInputContainer>
      <LongInputComponents.LongInputLabel htmlFor={uuid}>
        {label}
      </LongInputComponents.LongInputLabel>
      <LongInputComponents.LongInputTextArea
        id={uuid}
        placeholder={placeholder}
      />
    </LongInputComponents.LongInputContainer>
  );
};
