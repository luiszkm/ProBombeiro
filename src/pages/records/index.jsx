import { Header } from "../../components/Header";
import { Container, DivTable } from "./styles";



export function Records (){
  const load = JSON.parse(localStorage.getItem('@register-list'))

console.log(load.Nome);
  return(
    <Container>
      <Header />
      
      <DivTable>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Idade</th>
            <th>Sexo</th>
            <th>RG</th>
            <th>Tel</th>
            <th>Rua</th>
            <th>numero</th>
            <th>Bairro</th>
            <th>Cidade</th>
            <th>Nome Acompanhante</th>
            <th>Tel acompanhante</th>
            </tr>
        </thead>
        <tbody>
          
        </tbody>
      </table>
      </DivTable>
     
    </Container>
  )
}