import { Link } from "react-router-dom";
import { HeaderBlock, HeaderLogo, StyledHeader } from "../Header/Header.styled";
import {
  NFBlock,
  NFImg,
  NFLink,
  NFText,
  NFTextBlock,
  NFTitle,
} from "./NotFound.styled";

const NotFound = (theme = "light") => {
  const logoUrl = theme === "dark" ? "public/logo_dark.png" : "public/logo.png";
  return (
    <>
      <StyledHeader>
        <HeaderBlock>
          <HeaderLogo>
            <Link to="/">
              <img src={logoUrl} alt="logo" />
            </Link>
          </HeaderLogo>
        </HeaderBlock>
      </StyledHeader>
      <NFBlock>
        <NFImg src="public/404.png" />
        <NFTextBlock>
          <NFTitle>404</NFTitle>
          <NFText>Страница не найдена</NFText>
          <NFLink>
            <Link to="/">Вернуться на главную</Link>
          </NFLink>
        </NFTextBlock>
      </NFBlock>
    </>
  );
};

export default NotFound;
