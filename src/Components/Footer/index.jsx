import { Container } from './style'
import { Logo } from '../../Assets/Icons/icons'

export function Footer(){
  return(
  <Container>
  <div>
    <Logo/>
    <span>food explorer</span>
  </div>
  <div>
    <span>© 2023 - Todos os direitos reservados.</span>
  </div>
  </Container>
  )
}