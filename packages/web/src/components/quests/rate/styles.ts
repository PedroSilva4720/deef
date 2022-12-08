import { styled } from '../../../styles';
import { Root } from '@radix-ui/react-label';
import * as ToolbarRadix from '@radix-ui/react-toolbar';

export const RateLabel = styled(Root, {
  color: '$mint11',
});

export const RateContainer = styled('div', {
  fontFamily: '"Inter", sans-serif',
  display: 'flex',
  flexDirection: 'column',
  gap: 5,
});

export const RateToggleItem = styled(ToolbarRadix.ToggleItem, {
  all: 'unset',
  border: 'solid 1px $mauve11',
  flex: '0 0 auto',
  color: '$mauve11',
  height: 25,
  width: 25,
  padding: '0 5px',
  borderRadius: 4,
  display: 'inline-flex',
  fontSize: 13,
  lineHeight: 1,
  fontFamily: '"Inter", sans-serif',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$white',
  boxSizing: 'border-box',
  marginLeft: 2,
  '&:hover': { backgroundColor: '$mint3', color: '$mint11' },
  '&:focus': {
    position: 'relative',
    boxShadow: `0 0 0 2px $mint7`,
    border: 'solid 3px $mint9',
  },
  '&:first-child': { marginLeft: 0 },
  '&[data-state=on]': {
    backgroundColor: '$mint5',
    color: '$mint11',
  },
});
