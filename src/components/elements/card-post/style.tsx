import { keyframes } from '@stitches/react';
import { styled } from 'stitches.config';

const upMove = keyframes({
  '0%': { transform: 'translateY(0)' },
  '50%': { transform: 'translateY(-5px)' },
  '100%': { transform: 'translateY(-2px)' },
});

export const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  width: '800px',
  alignItems: 'center',
  gap: '15px',
  padding: '15px 20px',
  backgroundColor: '#ebebeb',
  borderRadius: '10px',
  wordBreak: 'break-word',
  '&:hover': {
    cursor: 'pointer',
    animation: `${upMove} 1s infinite alternate`,
    animationTimingFunction: 'ease',
  },
});

export const ImageWrapper = styled('img', {
  width: '250px',
  height: 'auto',
  borderRadius: '10px',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
});

export const TextWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: '100%',
  height: '150px',
  padding: '5px',
});

export const CreatorAndDataWrapper = styled('div', {
  display: 'flex',
  justifyContent: 'flex-end',
  fontSize: '11px',
});
