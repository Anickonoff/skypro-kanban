import { useContext, useEffect, useRef } from "react";
import {
  PopUserSet,
  UserExitBtn,
  UserMail,
  UserName,
  UserTheme,
  UserThemeTitle,
  UserThemeBtn,
  UserCategoriesBtn,
  UserBtns,
} from "./PopUser.styled";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { ThemeModeContext } from "../../context/ThemeModeContext";

const useClickOutside = (ref, handler) => {
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        handler();
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [ref, handler]);
};

const PopUser = ({ onClose }) => {
  const ref = useRef();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeModeContext);
  useClickOutside(ref, onClose);
  const handleExit = () => {
    onClose();
    navigate("/exit");
  };

  return (
    <PopUserSet id="user-set-target" ref={ref}>
      <UserName>{user.name}</UserName>
      <UserMail>{user.login}</UserMail>
      <UserTheme>
        <UserThemeTitle>Темная тема</UserThemeTitle>
        <UserThemeBtn
          type="checkbox"
          name="checkbox"
          onChange={toggleTheme}
          checked={theme === "dark"}
        />
      </UserTheme>
      <UserBtns>
        <UserCategoriesBtn
          type="button"
          onClick={() => navigate("/categories")}
        >
          Редактировать категории
        </UserCategoriesBtn>
        <UserExitBtn type="button" onClick={handleExit}>
          Выйти
        </UserExitBtn>
      </UserBtns>
    </PopUserSet>
  );
};

export default PopUser;
