import { styled } from '../../../styles';
import { Root } from '@radix-ui/react-label';
import * as ToolbarRadix from '@radix-ui/react-toolbar';

export const RateLabel = styled(Root, {
  color: '$grass11',
  fontSize: '$sm',
  fontWeight: 400,
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
  '&:hover': { backgroundColor: '$grass3', color: '$grass11' },
  '&:focus': {
    position: 'relative',
    boxShadow: `0 0 0 2px $grass7`,
    border: 'solid 3px $grass9',
  },
  '&:first-child': { marginLeft: 0 },
  '&[data-state=on]': {
    backgroundColor: '$grass5',
    color: '$grass11',
    border: 'solid 2px $grass11',
  },
});

export const RateToggleGroup = styled(ToolbarRadix.ToggleGroup, {
  display: 'inline-flex',
  gap: 5,
});
