import { keyframes } from '@stitches/react';
import { styled } from 'stitches.config';

const rotate = keyframes({
  '100%': { transform: 'rotate(1turn)' },
});

const upMove = keyframes({
  '0%': { transform: 'translateY(0)' },
  '50%': { transform: 'translateY(-5px)' },
  '100%': { transform: 'translateY(-2px)' },
});

export const Wrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '20px',
});

export const Button = styled('div', {
  variants: {
    loading: {
      true: {
        '&::before': {
          content: '',
          position: 'absolute',
          zIndex: '-2',
          left: '-50%',
          top: '-120%',
          width: '200%',
          height: '350%',
          opacity: '.8',
          backgroundColor: '#399953',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '50% 50%, 50% 50%',
          backgroundPosition: '0 0, 100% 0, 100% 100%, 0 100%',
          backgroundImage:
            'linear-gradient(#79db93, #79db93), linear-gradient(#fbb300, #fbb300), linear-gradient(#e96157, #e96157), linear-gradient(#6193f1, #6193f1)',
          animation: `${rotate} 4s linear infinite`,
        },
      },
    },
  },

  '*, *::before, *::after': {
    boxSizing: 'border-box',
  },

  position: 'relative',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',

  zIndex: '0',
  width: '150px',
  height: '60px',
  borderRadius: '8px',
  overflow: 'hidden',
  padding: '4px 6px',

  '&:hover': {
    cursor: 'pointer',
    animation: `${upMove} 1s infinite alternate`,
    animationTimingFunction: 'ease',
  },

  '&::before': {
    content: '',
    position: 'absolute',
    zIndex: '-2',
    width: '100%',
    height: '100%',
    opacity: '.5',
    backgroundColor: 'rgb(103 116 137)',
  },

  '&::after': {
    content: '',
    position: 'absolute',
    zIndex: '-1',
    left: '5px',
    top: '5px',
    width: 'calc(100% - 10px)',
    height: 'calc(100% - 10px)',
    background: 'white',
    borderRadius: '5px',
  },
});
