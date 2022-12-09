import { styled } from '../../../styles';
import { Root } from '@radix-ui/react-label';
import * as SelectRadix from '@radix-ui/react-select';

export const SelectContainer = styled('div', {
  fontFamily: '"Inter", sans-serif',
  display: 'flex',
  flexDirection: 'column',
  gap: 5,
});
export const SelectLabel = styled(Root, {
  color: '$grass11',
  fontSize: '$sm',
  fontWeight: 400,
});

export const SelectTrigger = styled(SelectRadix.Trigger, {
  maxWidth: 200,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderRadius: '$2',
  padding: '0.5rem 1rem',
  fontSize: '$xsm',
  lineHeight: '1',
  gap: '1rem',
  borderStyle: 'solid',
  backgroundColor: '$white',
  color: '$mauve11',
  boxShadow: 'none',
  '&:hover': {
    backgroundColor: '$grass3',
    transition: '0.2s',
    '& svg': { color: '$grass11' },
  },
  '&:focus': {
    border: 'solid 3px $grass9',
    outline: 'none',
    borderRadius: '$2',
  },
  '&[data-placeholder]': { color: '$mauve11' },
  '&[data-placeholder]:hover': { color: '$grass11' },
});

export const SelectIcon = styled(SelectRadix.SelectIcon, {
  color: '$mauve11',
  alignItems: 'center',
});

export const SelectContent = styled(SelectRadix.Content, {
  overflow: 'hidden',
  backgroundColor: 'white',
  borderRadius: '$2',
  boxShadow:
    '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
});

export const SelectViewport = styled(SelectRadix.Viewport, {
  padding: '0.3rem',
  border: 'solid 1px $grass11',
  borderRadius: '$2',
});

export const SelectItem = styled(SelectRadix.Item, {
  fontSize: '$xsm',

  lineHeight: 1,
  color: '$grass11',
  borderRadius: '$1',
  display: 'flex',
  alignItems: 'center',
  //   height: ,
  fontFamily: '"Inter", sans-serif',
  padding: '5px 35px 5px 25px',
  position: 'relative',
  userSelect: 'none',

  '&[data-disabled]': {
    color: '$mauve8',
    pointerEvents: 'none',
  },

  '&[data-highlighted]': {
    outline: 'none',
    backgroundColor: '$grass11',
    color: '$grass1',
  },
});

export const SelectItemIndicator = styled(SelectRadix.ItemIndicator, {
  position: 'absolute',
  left: 0,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const scrollButtonStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 25,
  backgroundColor: 'white',
  color: '$grass11',
  cursor: 'default',
};

export const SelectScrollUpButton = styled(
  SelectRadix.ScrollUpButton,
  scrollButtonStyles
);

export const SelectScrollDownButton = styled(
  SelectRadix.ScrollDownButton,
  scrollButtonStyles
);
