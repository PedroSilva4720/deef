import { styled } from '../../styles';

export const Container = styled('div', {
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
});

export const Form = styled('form', {
  width: '75vw',
  display: 'flex',
  flexDirection: 'column',
  gap: '$gap',
  alignItems: 'center',
  justifyContent: 'center',
});
