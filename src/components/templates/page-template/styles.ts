import { styled } from '@stitches/react';

export const TemplateWrapper = styled('div', {
  maxWidth: '$max_desk',
  margin: '0 auto',
  height: '100%',

  '@media screen and (max-width: 768px)': {
    padding: '20px',
  },
});
