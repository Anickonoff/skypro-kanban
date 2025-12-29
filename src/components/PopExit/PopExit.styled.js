import styled from "styled-components";

const PopExitWindow = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  min-width: 320px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
`;

const ExitContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
`;

const ExitBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #ffffff;
  max-width: 370px;
  width: 100%;
  padding: 50px 60px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
`;

const ExitPrompt = styled.h2`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.4px;
  margin-bottom: 20px;
`;

const ExitForm = styled.form`
  width: 100%;
  gap: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ExitBtn = styled.button`
  width: 153px;
  height: 30px;
  border-radius: 4px;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  &:hover {
    background-color: #33399b;
    color: #ffffff;
    a {
      color: #ffffff;
    }
  }
  a {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const ExitBtnNo = styled(ExitBtn)`
    background-color: transparent;
    border: 0.7px solid var(--palette-navy-60, #565eef);
    color: #565eef;
    a {
        color: #565eef;
    }
`;

const ExitBtnYes = styled(ExitBtn)`
    background-color: #565eef;
    color: #ffffff;
    a {
        color: #ffffff;
    }
`;

export {
  PopExitWindow,
  ExitContainer,
  ExitBlock,
  ExitPrompt,
  ExitForm,
  ExitBtnNo,
  ExitBtnYes,
};
