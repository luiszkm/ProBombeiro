import { useState, useRef, useEffect } from "react";
import { Header } from "../../components/Header";
import { Container, DivTable, Table } from "./styles";



export function Records() {
  const load = JSON.parse(localStorage.getItem('@register-list'))
  const [registers, setApi] = useState(load)


 





  function createRow(datas) {
    const tr = document.createElement('tr')
    try {
      tr.innerHTML = `
      <td>${datas.type}</td>
      <td>${datas.name}</td>
      <td>${datas.age}</td>
      <td>${datas.sexo}</td>
      <td>${datas.rg}</td>
      <td>${datas.phone}</td>
      <td>${datas.street}</td>
      <td>${datas.number}</td>
      <td>${datas.district}</td>
      <td>${datas.city}</td>
      <td>${datas.escortName}</td>
      <td>${datas.escortPhone}</td>
      `
    } catch {
    }
    return tr
  }

  function removeTr() {
    try {
      const tbody = document.querySelector('table tbody')
      tbody.querySelectorAll('tr')
        .forEach(tr => {
          tr.remove()
        })
    } catch {

    }
  }


useEffect(()=>{
  removeTr()
  async function handleLoadData() {

    try {
      const tbody = document.querySelector('table tbody')

      registers.forEach(user => {
        console.log(user);
        const row = createRow(user)
        tbody.append(row)
      })
    } catch {

    }

  }
  handleLoadData() 
  
})
  return (
    <Container>
      <Header />

      <DivTable>
        <Table>
          <thead>
            <tr>
              <th>Tipo</th>
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
            <tr>
              <td></td>
            </tr>
          </tbody>
        </Table>
      </DivTable>

    </Container>
  )
}