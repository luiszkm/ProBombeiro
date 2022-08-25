import { Container } from "./styles";


export function Div({title, children}){

  return(
    <Container>
      <h4>{title}</h4>
     <div>
      {children}
     </div>
    </Container>
  )
}