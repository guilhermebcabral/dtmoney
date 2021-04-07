import Modal from 'react-modal';
import closeImg from '../../assets/close.svg'
import { Container } from './styles';

interface newTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal(props: newTransactionModalProps) {
  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >

      <button type="button" onClick={props.onRequestClose} className="react-modal-close">
        <img src={closeImg} alt="Fechar modal." />
      </button>

      <Container>
        <h2>Cadastrar Transação</h2>
        <form action="">

          <input placeholder="Título" />

          <input type="number" placeholder="Valor" />

          <input placeholder="Categoria" />

          <button type="submit">
            Cadastrar
        </button>


        </form>
      </Container>
    </Modal>


  )
}