import { styled } from '../../styles';

export const FooterContainer = styled('footer', {
  borderTop: '1px solid $grass11',
  fontFamily: '"Inter", sans-serif',
  color: '$grass11',
  backgroundColor: '$grass3',
  width: '100vw',
  height: '72px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '4px',
  bottom: 0,
  left: 0,
  position: 'fixed',
});

export const Text = styled('p', {
  lineHeight: '1rem',
  margin: '8px',
  padding: 0,
  '& a': {
    all: 'unset',
    fontFamily: '"Inter", sans-serif',
    underline: '$grass11',
    '&:hover': {
      color: '$grass10',
    },
  },
});
