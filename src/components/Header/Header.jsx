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

const Header = ({ theme = "light" }) => {
  const [userShown, setUserShown] = useState(false);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

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
          <Link to="/">
            <img src={logoUrl} alt="logo" />
          </Link>
        </HeaderLogo>

        <HeaderNav>
          <HeaderBtn onClick={hanleAddTaskClick} id="btnMainNew" type="button">
            Создать новую задачу
          </HeaderBtn>
          <HeaderUser href="#" onClick={toggleUser}>
            {user.name}
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
