import PopUser from "../PopUser/PopUser";
import { useState } from "react";
import {
  HeaderBlock,
  HeaderBtn,
  HeaderLogo,
  HeaderNav,
  HeaderUser,
  StyledHeader,
} from "./Header.styled";

const Header = ({ theme = "light", onAddTaskClick }) => {
  const [userShown, setUserShown] = useState(false);

  const toggleUser = (e) => {
    e.preventDefault();
    e.stopPropagation();
    userShown ? setUserShown(false) : setUserShown(true);
  };

  const logoUrl = theme === "dark" ? "public/logo_dark.png" : "public/logo.png";

  return (
    <StyledHeader>
      <HeaderBlock>
        <HeaderLogo>
          <a href="" target="_self">
            <img src={logoUrl} alt="logo" />
          </a>
        </HeaderLogo>

        <HeaderNav>
          <HeaderBtn onClick={onAddTaskClick} id="btnMainNew">
            Создать новую задачу
          </HeaderBtn>
          <HeaderUser href="#" onClick={toggleUser}>
            Ivan Ivanov
          </HeaderUser>
          {userShown && (
            <PopUser
              onClose={() => {
                setUserShown(false);
              }}
            />
          )}
        </HeaderNav>
      </HeaderBlock>
    </StyledHeader>
  );
};

export default Header;
