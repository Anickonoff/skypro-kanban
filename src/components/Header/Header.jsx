import PopUser from "../PopUser/PopUser";
import { useState } from "react";

const Header = () => {
  const [userShown, setUserShown] = useState(false);

  const toggleUser = (e) => {
    e.preventDefault();
    e.stopPropagation();
    userShown ? setUserShown(false) : setUserShown(true);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__block">
          <div className="header__logo _show _light">
            <a href="" target="_self">
              <img src="public/logo.png" alt="logo" />
            </a>
          </div>
          <div className="header__logo _dark">
            <a href="" target="_self">
              <img src="public/logo_dark.png" alt="logo" />
            </a>
          </div>
          <nav className="header__nav">
            <button className="header__btn-main-new _hover01" id="btnMainNew">
              <a href="#popNewCard">Создать новую задачу</a>
            </button>
            <a href="#" className="header__user _hover02" onClick={toggleUser}>
              Ivan Ivanov
            </a>
            {userShown && (
              <PopUser
                onClose={() => {
                  setUserShown(false);
                }}
              />
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
