import { createStitches } from '@stitches/react'

export const { styled, globalCss, css, getCssText, createTheme } = createStitches({
  theme: {
    colors: {
      //mutable
      background: '#FFFFFF',
      text: '#677489',

      //unmutables
      white: '#FFFFFF',
      gray: '#C3CBD5',
      green: '#60d685',
      red: '#FF7272',

      //low-scale
      low_gray: '#F2F5F8',
      low_green: 'rgba(96,214,133,0.3)',
      low_red: 'rgba(255, 114, 114, 0.1)',

      //high-scale
      high_green: '#469F62',
    },
    fontSizes: {
      1: '12px',
      2: '16px',
      3: '20px',
      4: '24px',
    },
    sizes: {
      max_desk: '1280px',
      max_tab: '768px',
      max_mob: '320px',
    },
  },
});

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    background: '$background',
    color: '$text',
  },

  '@media (max-width: 1080px)': {
    html: {
      fontSize: '93.75%',
    },
  },

  '@media (max-width: 720px)': {
    html: {
      fontSize: '87.5%',
    },
  },

  'body,input, textarea, select, button': {
    font: '400 1rem "Inter", sans-serif',
  },

  button: {
    cursor: 'pointer',
  },

  a: {
    color: 'inherit',
    textDecoration: 'none',
  },
});