import { styled } from 'stitches.config';

export const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  width: '800px',
  alignItems: 'center',
  gap: '15px',
  padding: '15px 20px',
  backgroundColor: '#ebebeb',
  borderRadius: '15px',
  wordBreak: 'break-word',
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
  gap: '15px',
  padding: '5px',
});

export const DescriptionWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  // background: 'linear-gradient(#ffffff00 50%, rgb(235, 235, 235))',
});

export const CreatorAndDataWrapper = styled('div', {
  display: 'flex',
  justifyContent: 'flex-end',
  fontSize: '13px',
});
