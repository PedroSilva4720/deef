import { styled } from '../../styles';

export const Form = styled('form', {
  display: 'flex',
  height: '100%',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$gap',
  '& h1, & p': {
    color: '$grass11',
    textAlign: 'center',
  },
});
