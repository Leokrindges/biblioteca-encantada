import { ButtonClose } from "../styled/modal/ButtonClose";
import { ModalButton } from "../styled/modal/ModalButton";
import { ModalContent } from "../styled/modal/ModalContent";
import { ModalDialog } from "../styled/modal/ModalDialog";
import { ModalFooter } from "../styled/modal/ModalFooter";
import { ModalHeader } from "../styled/modal/ModalHeader";
import { Livros } from "./MainCadastrar";
import { Modal as ModalStyled } from "../styled/modal/Modal";
import { ModalTitle } from "../styled/modal/ModalTitle";
import { ModalBody } from "../styled/modal/ModalBody";
import { Fragment } from "react/jsx-runtime";

interface ModalProps {
  children?: React.ReactNode;
  textoBotao: string;

  /* estados e setEstados compartilhados pela Home */
  aberto: boolean;
  setAberto: React.Dispatch<React.SetStateAction<boolean>>;
  setDados: React.Dispatch<React.SetStateAction<Livros[]>>;
  idExcluir?: string;
  titulo: string;
  acaoFechar: () => void;
  acaoConfirmar: () => void;
}

export function Modal(props: ModalProps) {

  function fechaModal() {
    props.setAberto(false);
  }

  return (
    <ModalStyled style={{ display: props.aberto ? "block" : "none" }}>
      <ModalDialog>
        <ModalContent>
          <ModalHeader>
            <ModalTitle>{props.titulo}</ModalTitle>
            <ButtonClose type="button" onClick={fechaModal}></ButtonClose>
          </ModalHeader>
          <ModalBody>{props.children ?? <Fragment />}</ModalBody>
          <ModalFooter>
            <ModalButton type="button" onClick={fechaModal}>
              Cancelar
            </ModalButton>
            <ModalButton type="button" onClick={props.acaoConfirmar}>
              {props.textoBotao}
            </ModalButton>
          </ModalFooter>
        </ModalContent>
      </ModalDialog>
    </ModalStyled>
  );
}
