import { Container } from './style'

export function Tags({content,...rest}){
  return(
    <Container>
      <span>{content}</span>
    </Container>
  )
}