import {
  ExitBlock,
  ExitBtnNo,
  ExitBtnYes,
  ExitContainer,
  ExitForm,
  ExitPrompt,
  PopExitWindow,
} from "./PopExit.styled";

const PopExit = () => {
  return (
    <PopExitWindow id="popExit">
      <ExitContainer>
        <ExitBlock>
          <ExitPrompt>Выйти из аккаунта?</ExitPrompt>
          <ExitForm id="formExit" action="#">
            <ExitBtnYes id="exitYes">
              <a href="modal/signin.html">Да, выйти</a>{" "}
            </ExitBtnYes>
            <ExitBtnNo id="exitNo">
              <a href="main.html">Нет, остаться</a>{" "}
            </ExitBtnNo>
          </ExitForm>
        </ExitBlock>
      </ExitContainer>
    </PopExitWindow>
  );
};

export default PopExit;
