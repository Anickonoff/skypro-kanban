import {
  ModalCard,
  ModalContent,
  ModalOverlay,
  ModalRoot,
} from "./Modal.styled";

const Modal = ({ children }) => {
  return (
    <ModalRoot>
      <ModalOverlay>
        <ModalCard>
          <ModalContent>{children}</ModalContent>
        </ModalCard>
      </ModalOverlay>
    </ModalRoot>
  );
};
export default Modal;
