import { blackA, mauve, grass, red } from '@radix-ui/colors';
import { createStitches, globalCss } from '@stitches/react';

export const { styled, css } = createStitches({
  theme: {
    colors: {
      white: '#fff',
      ...blackA,
      ...mauve,
      ...grass,
      ...red,
    },
    fontSizes: {
      xsm: '0.8rem',
      sm: '1rem',
      md: '2rem',
      lg: '4rem',
    },
    space: {
      btn: '0.5rem 1rem',
      gap: '25px',
    },
    radii: {
      1: '4px',
      2: '8px',
    },
  },
  media: {
    bp1: '(min-width: 640px)',
    bp2: '(min-width: 768px)',
    bp3: '(min-width: 1024px)',
  },
  utils: {
    mx: (value: string) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: string) => ({
      marginTop: value,
      marginBottom: value,
    }),
    px: (value: string) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: string) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    underline: (color: string) => ({
      textDecoration: 'underline',
      textDecorationColor: color,
      textDecorationThickness: '0.1rem',
    }),
  },
});

export const globalStyle = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    border: 0,
  },
  'body, html, #root': {
    height: '100%',
  },
  'body, input, textarea': {
    fontFamily: '"Inter", sans-serif',
  },
});
