import { useNavigate } from "react-router-dom";
import {
  ExitBlock,
  ExitBtnNo,
  ExitBtnYes,
  ExitContainer,
  ExitForm,
  ExitPrompt,
  PopExitWindow,
} from "./PopExit.styled";

const PopExit = ({ logout }) => {
  const navigate = useNavigate();
  const handleYesClick = () => {
    logout();
    navigate("/login");
  };
  const handleNoClick = () => {
    navigate("/");
  };
  return (
    <PopExitWindow id="popExit">
      <ExitContainer>
        <ExitBlock>
          <ExitPrompt>Выйти из аккаунта?</ExitPrompt>
          <ExitForm id="formExit" action="#">
            <ExitBtnYes
              id="exitYes"
              onClick={handleYesClick}
              type="button"
              aria-label="Да, выйти из аккаунта"
            >
              Да, выйти
            </ExitBtnYes>
            <ExitBtnNo
              id="exitNo"
              onClick={handleNoClick}
              type="button"
              aria-label="Нет, остаться в аккаунте"
            >
              Нет, остаться
            </ExitBtnNo>
          </ExitForm>
        </ExitBlock>
      </ExitContainer>
    </PopExitWindow>
  );
};

export default PopExit;
