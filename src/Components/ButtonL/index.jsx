import { Container } from './style';

export function ButtonL({text,...rest}){
  return(
    <Container>
      <button type='button' {...rest}>{text}</button>
    </Container>
  )
}