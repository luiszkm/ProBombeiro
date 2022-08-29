import { Container } from "./styles";


export function Div({title,id, children}){

  return(
    <Container>
      <label htmlFor={id}>{title}</label>

      {children}
    </Container>
  )
}