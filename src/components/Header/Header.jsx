import PopUser from "../PopUser/PopUser";
import { useContext, useState } from "react";
import {
  HeaderBlock,
  HeaderBtn,
  HeaderLogo,
  HeaderNav,
  HeaderUser,
  StyledHeader,
} from "./Header.styled";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { ThemeModeContext } from "../../context/ThemeModeContext";

const Header = () => {
  const [userShown, setUserShown] = useState(false);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { theme } = useContext(ThemeModeContext);

  const toggleUser = (e) => {
    e.preventDefault();
    e.stopPropagation();
    userShown ? setUserShown(false) : setUserShown(true);
  };

  const hanleAddTaskClick = () => {
    navigate("/card/new");
  };

  const logoUrl = theme === "dark" ? "/logo_dark.png" : "/logo.png";

  return (
    <StyledHeader>
      <HeaderBlock>
        <HeaderLogo>
          <Link to="/">
            <img src={logoUrl} alt="logo" />
          </Link>
        </HeaderLogo>

        <HeaderNav>
          <HeaderBtn onClick={hanleAddTaskClick} id="btnMainNew" type="button">
            Создать новую задачу
          </HeaderBtn>
          <HeaderUser href="#" onClick={toggleUser}>
            <span>{user.name}</span>
          </HeaderUser>
          {userShown && (
            <PopUser
              user={user}
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
