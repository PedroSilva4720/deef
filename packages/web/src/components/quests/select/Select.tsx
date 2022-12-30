import React from 'react';
import * as SelectRadix from '@radix-ui/react-select';
import { FiChevronDown, FiChevronUp, FiCheck } from 'react-icons/fi';
import * as SelectComponents from './styles';
import { v4 as uuidV4 } from 'uuid';

export const Select: React.FC<{
  options: string[];
  label: string;
  placeholder?: string;
  setFunction: React.Dispatch<React.SetStateAction<any>>;
  displayLabel?: boolean;
}> = ({ options, label, placeholder, setFunction, displayLabel = false }) => {
  console.warn('Select component is disable indefinitely');

  const uuid = uuidV4();
  return (
    <SelectComponents.SelectContainer>
      <SelectComponents.SelectLabel
        htmlFor={uuid}
        style={displayLabel ? { display: 'block' } : { display: 'none' }}
      >
        {label}
      </SelectComponents.SelectLabel>

      <SelectRadix.Root onValueChange={value => setFunction(value)}>
        <SelectComponents.SelectTrigger aria-label={label} id={uuid}>
          <SelectRadix.Value placeholder={placeholder} />
          <SelectComponents.SelectIcon>
            <FiChevronDown />
          </SelectComponents.SelectIcon>
        </SelectComponents.SelectTrigger>
        <SelectRadix.Portal>
          <SelectComponents.SelectContent>
            <SelectComponents.SelectScrollUpButton>
              <FiChevronUp />
            </SelectComponents.SelectScrollUpButton>
            <SelectComponents.SelectViewport>
              {options.map((item: string) => {
                return (
                  <SelectComponents.SelectItem
                    value={item}
                    key={item}
                    aria-label={item}
                  >
                    <SelectRadix.ItemText>{item}</SelectRadix.ItemText>
                    <SelectComponents.SelectItemIndicator>
                      <FiCheck />
                    </SelectComponents.SelectItemIndicator>
                  </SelectComponents.SelectItem>
                );
              })}
            </SelectComponents.SelectViewport>
            <SelectComponents.SelectScrollDownButton>
              <FiChevronDown />
            </SelectComponents.SelectScrollDownButton>
          </SelectComponents.SelectContent>
        </SelectRadix.Portal>
      </SelectRadix.Root>
    </SelectComponents.SelectContainer>
  );
};
