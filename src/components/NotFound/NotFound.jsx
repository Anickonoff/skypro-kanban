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
import { useContext } from "react";
import { ThemeModeContext } from "../../context/ThemeModeContext";

const NotFound = () => {
  const { theme } = useContext(ThemeModeContext);
  const logoUrl = theme === "dark" ? "/logo_dark.png" : "/logo.png";
  const notFoundUrl = theme === "dark" ? "/404_dark.png" : "/404.png";
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
        <NFImg src={notFoundUrl} />
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
