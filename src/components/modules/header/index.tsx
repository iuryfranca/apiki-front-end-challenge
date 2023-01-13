import Image from "next/image";
import { HeaderWrapper } from "./styles";

export const Header = () => {
  return (
    <HeaderWrapper>
      <Image
        src="https://apiki.com/wp-content/uploads/2020/11/logo-apiki-site-01.png"
        width={140}
        height={41}
        alt="Avatar Uploader"
      />
    </HeaderWrapper>
  );
};
