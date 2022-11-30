import React from 'react';
import * as RateComponents from './styles';
import { v4 as uuidV4 } from 'uuid';

export const Rate: React.FC<{ label: string }> = ({ label }) => {
  const uuid = uuidV4();

  return (
    <>
      <RateComponents.RateContainer>
        <RateComponents.RateLabel htmlFor={uuid}>
          {label}
        </RateComponents.RateLabel>
        <RateComponents.RateInputContainer id={uuid}>
          <RateComponents.RateInput type='checkbox' name='' id='' />
          <RateComponents.RateInput type='checkbox' name='' id='' />
          <RateComponents.RateInput type='checkbox' name='' id='' />
          <RateComponents.RateInput type='checkbox' name='' id='' />
          <RateComponents.RateInput type='checkbox' name='' id='' />
          <RateComponents.RateInput type='checkbox' name='' id='' />
          <RateComponents.RateInput type='checkbox' name='' id='' />
          <RateComponents.RateInput type='checkbox' name='' id='' />
          <RateComponents.RateInput type='checkbox' name='' id='' />
          <RateComponents.RateInput type='checkbox' name='' id='' />
        </RateComponents.RateInputContainer>
      </RateComponents.RateContainer>
    </>
  );
};
