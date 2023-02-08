import { styled } from '../../styles';

export const Container = styled('div', {
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  '& h1, & p': {
    color: '$grass11',
    textAlign: 'center',
  },
});

export const Form = styled('form', {
  height: '75vw',
  display: 'flex',
  flexDirection: 'column',
  gap: '$gap',
  alignItems: 'center',
  justifyContent: 'center',
});

export const SkeletonContainer = styled('div', {
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
  alignItems: 'center',
  justifyContent: 'center',
});
