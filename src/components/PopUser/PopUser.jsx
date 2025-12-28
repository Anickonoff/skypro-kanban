import { useEffect, useRef } from "react";
import {
  PopUserSet,
  UserExitBtn,
  UserMail,
  UserName,
  UserTheme,
  UserThemeTitle,
  UserThemeBtn,
} from "./PopUser.styled";

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
  useClickOutside(ref, onClose);
  return (
    <PopUserSet id="user-set-target" ref={ref}>
      <UserName>Ivan Ivanov</UserName>
      <UserMail>ivan.ivanov@gmail.com</UserMail>
      <UserTheme>
        <UserThemeTitle>Темная тема</UserThemeTitle>
        <UserThemeBtn type="checkbox" name="checkbox" />
      </UserTheme>
      <UserExitBtn type="button">
        <a href="#popExit">Выйти</a>
      </UserExitBtn>
    </PopUserSet>
  );
};

export default PopUser;
