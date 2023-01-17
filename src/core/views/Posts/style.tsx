import { styled } from 'stitches.config';

export const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const WrapperImage = styled('div', {
  width: '100%',
  height: 570,
  position: 'relative',
  backgroundSize: 'cover',
  zIndex: -1,

  '&::after': {
    background:
      'linear-gradient(to bottom, transparent 60%, rgba(255, 255, 255, 1) 99%)',
    bottom: '0',
    content: '',
    height: '100%',
    left: '0',
    position: 'absolute',
    right: '0',
    top: '0',
    width: '100%',
  },
});

export const WrapperTitle = styled('div', {
  margin: '-60px 100px 50px 100px',

  display: 'flex',
  justifyContent: 'center',

  width: '100%',
  height: '100%',
  padding: '5px',
});

export const WrapperContent = styled('div', {
  '*': {
    margin: '4px 0',
  },

  'h2, h3, h4': {
    margin: '30px 0 10px 0',
  },

  img: {
    margin: '25px 0',
  },

  'ol, ul': {
    margin: '5px 0 5px 40px',
  },

  margin: 'auto 120px',
  width: 'auto',
  maxWidth: '100%',

  display: 'flex',
  flexDirection: 'column',

  fontSize: '16px',
});
