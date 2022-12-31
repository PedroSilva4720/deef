import { styled } from '../../../styles';
import { Root } from '@radix-ui/react-label';

export const ShortInputContainer = styled('div', {
  display: 'flex',
  fontFamily: '"Inter", sans-serif',
  flexDirection: 'column',
  gap: 5,
});

export const ShortInputInput = styled('input', {
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'solid 1px $mauve11',
  width: '100%',
  maxWidth: 600,
  height: 35,
  resize: 'none',
  borderRadius: '$1',
  padding: '0.5rem 1rem',
  fontSize: '$xsm',
  lineHeight: 1,
  color: '$grass11',
  boxShadow: `0 0 0 1px $grass7`,

  '&:focus': {
    backgroundColor: '$grass1',
    boxShadow: `0 0 0 2px $grass8`,
    border: 'solid 3px $grass11',
    outline: 'none',
  },
  '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
    '-webkit-appearance': 'none',
    margin: 0,
  },
  '&[type=number]': {
    '-moz-appearance': 'textfield',
  },
});

export const ShortInputLabel = styled(Root, {
  color: '$grass11',
  fontSize: '$sm',
  fontWeight: 400,
});
