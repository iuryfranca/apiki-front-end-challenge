import Image from 'next/image';
import { HeaderWrapper } from './styles';

export const Header = () => {
  return (
    <HeaderWrapper>
      <Image
        src="/logo-apiki-site.png"
        width={160}
        height={50}
        alt="Avatar Uploader"
      />
    </HeaderWrapper>
  );
};
