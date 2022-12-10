import { styled } from '../../styles';

export const HTMLButton = styled('button', {
  all: 'unset',
  boxSizing: 'border-box',
  fontFamily: '"Inter", sans-serif',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  padding: '$btn',
  fontSize: '$sm',
  lineHeight: 1,
  fontWeight: 400,
  height: 35,

  variants: {
    variant: {
      grass: {
        backgroundColor: 'white',
        border: 'solid 1px $grass11',
        color: '$grass11',
        boxShadow: `0 2px 10px $blackA7`,
        '&:hover': { backgroundColor: '$grass3', color: '$grass11' },
        '&:focus': {
          border: 'solid 3px $grass9',
        },
        '&:active': {
          backgroundColor: '$grass5',
          color: '$grass11',
          border: 'solid 2px $grass11',
        },
      },
      red: {
        backgroundColor: '$red3',
        border: 'solid 1px $red11',
        color: '$red11',
        boxShadow: `0 2px 10px $blackA7`,
        '&:hover': { backgroundColor: '$red3', color: '$red11' },
        '&:focus': {
          border: 'solid 3px $red9',
        },
        '&:active': {
          backgroundColor: '$red5',
          color: '$red11',
          border: 'solid 2px $red11',
        },
      },
      mauve: {
        backgroundColor: '$mauve3',
        border: 'solid 1px $mauve11',
        color: '$mauve11',
        boxShadow: `0 2px 10px $blackA7`,
        '&:hover': { backgroundColor: '$mauve3', color: '$mauve11' },
        '&:focus': {
          border: 'solid 3px $mauve9',
        },
        '&:active': {
          backgroundColor: '$mauve5',
          color: '$mauve11',
          border: 'solid 2px $mauve11',
        },
      },
    },
  },

  defaultVariants: {
    variant: 'grass',
  },
});
