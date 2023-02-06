import { styled } from '../../styles';
import { SkeletonTheme } from 'react-loading-skeleton';

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

export const SkeletonContainer = styled('div', {
  display: 'flex',
  height: '100%',
  width: '100%',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '20px',
});
