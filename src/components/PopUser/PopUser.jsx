import { useEffect, useRef } from "react";

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
    <div
      className="header__pop-user-set pop-user-set"
      id="user-set-target"
      ref={ref}
    >
      <p className="pop-user-set__name">Ivan Ivanov</p>
      <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
      <div className="pop-user-set__theme">
        <p>Темная тема</p>
        <input type="checkbox" className="checkbox" name="checkbox" />
      </div>
      <button type="button" className="_hover03">
        <a href="#popExit">Выйти</a>
      </button>
    </div>
  );
};

export default PopUser;
