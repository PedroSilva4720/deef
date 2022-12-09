import { mint, blackA, mauve, grass, yellow } from '@radix-ui/colors';
import { createStitches } from '@stitches/react';

export const { styled, css } = createStitches({
  theme: {
    colors: {
      white: '#fff',
      ...blackA,
      ...mauve,
      ...grass,
    },
    fontSizes: {
      xsm: '0.8rem',
      sm: '1rem',
      md: '2rem',
      lg: '4rem',
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
  },
});
