import { Container } from "./style"


export function Input({icon:Icon,required,...rest}){

  return(

    <Container>
      {Icon && <Icon size={20}/>}
      <input required={true} {...rest}></input>

    </Container>

  )
}