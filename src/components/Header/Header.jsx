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
import { useNavigate } from "react-router-dom";

const Header = ({ theme = "light" }) => {
  const [userShown, setUserShown] = useState(false);
  const navigate = useNavigate();
  
  const toggleUser = (e) => {
    e.preventDefault();
    e.stopPropagation();
    userShown ? setUserShown(false) : setUserShown(true);
  };

  const hanleAddTaskClick = () => {
    navigate("/card/new");
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
          <HeaderBtn onClick={hanleAddTaskClick} id="btnMainNew" type="button">
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
