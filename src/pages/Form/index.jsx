import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { DivRow } from '../../components/DivRow';

import { Form, InputStyle, Button } from "./styles"

export function FormPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data)
    alert(JSON.stringify(data))
  };
  console.log(errors);


  useEffect(() => {
    const api = `http://localhost:3000/chamados`;

    async function getProducts(url = api) {
      try {
        let api = await fetch(url)
        let products = await api.json()
        console.log(products);
        return products
      } catch (error) {
        console.error(error)
      }

    }
    getProducts()

    async function addProduct(newProduct, url = api) {
      try {
        let api = await fetch(url, {
          method: "POST",
          body: newProduct,
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        })
        let products = await then(response => response.json())
        return products
      } catch (error) {
        return
      }

    }
  })
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>

      <select {...register("Tipo")}>
        <option value="Lojista ">Lojista </option>
        <option value=" Colaborador "> Colaborador </option>
        <option value=" Cliente"> Cliente</option>
        <option value=" Terceirizado"> Terceirizado</option>
      </select>


      <InputStyle type="text" placeholder="Nome" {...register("Nome", {})} />
      <InputStyle type="number" placeholder="Idade" {...register("Idade", {})} />


      <DivRow>
        <label htmlFor="">
          M
          <InputStyle {...register("Sexo")} type="radio" value="M" />
        </label>

        <label htmlFor="F">F
          <InputStyle {...register("Sexo")} type="radio" value=" F" />
        </label>
      </DivRow>



      <InputStyle type="text" placeholder="Rg" {...register("Rg", {})} />
      <InputStyle type="text" placeholder="Tel" {...register("Tel", {})} />
      <InputStyle type="text" placeholder="Rua" {...register("Rua", {})} />
      <InputStyle type="text" placeholder="Numero" {...register("Numero", {})} />
      <InputStyle type="text" placeholder="Bairro" {...register("Bairro", {})} />
      <InputStyle type="text" placeholder="Cidade" {...register("Cidade", {})} />
      <InputStyle type="text" placeholder="Nome Acompanhante" {...register("Nome Acompanhante", {})} />
      <InputStyle type="number" placeholder="Tel Acompanhante" {...register("Tel Acompanhante", {})} />
      <InputStyle type="datetime-local" placeholder="Transmissão" {...register("Transmissão", {})} />
      <InputStyle type="datetime-local" placeholder="Chegada " {...register("Chegada ", {})} />
      <InputStyle type="datetime-local" placeholder="Saida" {...register("Saida", {})} />
      <InputStyle type="datetime-local" placeholder="Liberação" {...register("Liberação", {})} />

      <textarea {...register("Medicamentos e Hora ministrada", {})} />


      <Button type="submit" />
    </Form>
  );
}