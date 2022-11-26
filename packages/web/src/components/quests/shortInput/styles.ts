import { styled } from '../../../styles';
import { Root } from '@radix-ui/react-label';

export const ShortInputContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
});

export const ShortInputInput = styled('input', {
  padding: '0.5rem',
  width: '30rem',
  borderTop: 'none',
  borderLeft: 'none',
  borderRight: 'none',
  borderBottom: 'solid 2px #83b7f7',
  fontSize: '$sm',
  color: '#83b7f7',
  backgroundColor: '#ebf1f7',
  '&:focus': {
    outline: 'none',
  },
});

export const ShortInputLabel = styled(Root, {
  fontSize: '$sm',
  fontWeight: '400',
  color: '#83b7f7',
  fontFamily: '"Inter", sans-serif',
});
