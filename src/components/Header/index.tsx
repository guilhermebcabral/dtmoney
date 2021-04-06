import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

// Interface para definir as propriedades que o componente vai receber.
interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

// Header recebe a função como propriedade do componente pai. 
// E repassa essa propriedade para o botão.
export function Header(props: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={props.onOpenNewTransactionModal} >
          Nova transação
        </button>
      </Content>
    </Container>
  )
}