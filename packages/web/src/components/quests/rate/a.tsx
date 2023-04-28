import React from 'react';
import * as RateComponents from './styles';
import * as ToolbarRadix from '@radix-ui/react-toolbar';
// import * as ToggleGroup from '@radix-ui/react-toggle-group';
import { v4 as uuidV4 } from 'uuid';

export const Rate: React.FC<{
  label: string;
  setFunction: React.Dispatch<React.SetStateAction<any>>;
  displayLabel?: boolean;
  name: string;
  value: string | undefined;
}> = ({ label, displayLabel = false, setFunction, name, value }) => {
  const uuid = uuidV4();

  const valueHandler = (value: string) => {
    console.log(value);
  };

  return (
    <RateComponents.RateContainer>
      <RateComponents.RateLabel
        htmlFor={uuid}
        style={displayLabel ? { display: 'block' } : { display: 'none' }}
      >
        {label}
      </RateComponents.RateLabel>
      <ToolbarRadix.Root
        aria-label='Rate Options'
        id={uuid}
        // onValueChange={valueHandler}
      >
        <RateComponents.RateToggleGroup
          // onValueChange={valueHandler}
          type='single'
          aria-label={`Rate ${label}`}
          value={value}
          // onValueChange={value => {
          //   console.log(value);
          //   setFunction((oldValue: any) => {
          //     return [...oldValue, { name, value }];
          //   });
          // }}
        >
          <RateComponents.RateToggleItem value='1' aria-label='value 1'>
            1
          </RateComponents.RateToggleItem>
          <RateComponents.RateToggleItem value='2' aria-label='value 2'>
            2
          </RateComponents.RateToggleItem>
          <RateComponents.RateToggleItem value='3' aria-label='value 3'>
            3
          </RateComponents.RateToggleItem>
          <RateComponents.RateToggleItem value='4' aria-label='value 4'>
            4
          </RateComponents.RateToggleItem>
          <RateComponents.RateToggleItem value='5' aria-label='value 5'>
            5
          </RateComponents.RateToggleItem>
          <RateComponents.RateToggleItem value='6' aria-label='value 6'>
            6
          </RateComponents.RateToggleItem>
          <RateComponents.RateToggleItem value='7' aria-label='value 7'>
            7
          </RateComponents.RateToggleItem>
          <RateComponents.RateToggleItem value='8' aria-label='value 8'>
            8
          </RateComponents.RateToggleItem>
          <RateComponents.RateToggleItem value='9' aria-label='value 9'>
            9
          </RateComponents.RateToggleItem>
          <RateComponents.RateToggleItem value='10' aria-label='value 10'>
            10
          </RateComponents.RateToggleItem>
        </RateComponents.RateToggleGroup>
      </ToolbarRadix.Root>
    </RateComponents.RateContainer>
  );
};
