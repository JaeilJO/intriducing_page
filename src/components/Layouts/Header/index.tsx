import S from "./index.styled";

import anchors from "@/utils/anchors";
import Logo from "@/components/atoms/Logo";
import Navigtaion from "@/components/Navigation";

const Header = () => {
  return (
    <S.Header>
      <Logo />
      <Navigtaion anchors={anchors} />
    </S.Header>
  );
};

export default Header;
