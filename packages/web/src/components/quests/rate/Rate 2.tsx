import React from 'react';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import { styled } from '@stitches/react';
import { violet, blackA, mauve } from '@radix-ui/colors';

export const Rate: React.FC<{
  label: string;
  setFunction: React.Dispatch<React.SetStateAction<any>>;
  displayLabel?: boolean;
  name: string;
  value: string | undefined;
}> = ({ label, displayLabel = false, setFunction, name, value }) => {
  return (
    <ToggleGroupRoot
      type='single'
      defaultValue='center'
      aria-label='Text alignment'
      onValueChange={console.log}
    >
      <ToggleGroupItem value='left' aria-label='Left aligned'>
        1
      </ToggleGroupItem>
      <ToggleGroupItem value='center' aria-label='Center aligned'>
        2
      </ToggleGroupItem>
      <ToggleGroupItem value='right' aria-label='Right aligned'>
        3
      </ToggleGroupItem>
    </ToggleGroupRoot>
  );
};

const ToggleGroupRoot = styled(ToggleGroup.Root, {
  display: 'inline-flex',
  backgroundColor: mauve.mauve6,
  borderRadius: 4,
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
});

const ToggleGroupItem = styled(ToggleGroup.Item, {
  all: 'unset',
  backgroundColor: 'white',
  color: mauve.mauve11,
  height: 35,
  width: 35,
  display: 'flex',
  fontSize: 15,
  lineHeight: 1,
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: 1,
  '&:first-child': {
    marginLeft: 0,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
  },
  '&:last-child': { borderTopRightRadius: 4, borderBottomRightRadius: 4 },
  '&:hover': { backgroundColor: violet.violet3 },
  '&[data-state=on]': {
    backgroundColor: violet.violet5,
    color: violet.violet11,
  },
  '&:focus': { position: 'relative', boxShadow: `0 0 0 2px black` },
});
