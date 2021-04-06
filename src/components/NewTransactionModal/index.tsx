import Modal from 'react-modal';

interface newTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal(props: newTransactionModalProps) {
  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.onRequestClose}
    >
      <h2>Cadastrar Transação</h2>
    </Modal>


  )
}