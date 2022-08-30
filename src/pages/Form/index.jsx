import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { DivRow } from '../../components/DivRow';
import { Div } from '../../components/Div';
import { Grid } from '../../components/Grid';

import { Form, InputStyle, Button, Container } from "./styles"
import { Header } from '../../components/Header';
let teste = []

export function FormPage() {
  const [local, setLocal] = useState([])

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    //alert(JSON.stringify(data))
    teste.push(data)
    setLocal(prevState => [...prevState, data])
    alert("Registro cadastrado com sucesso!")
    localStorage.setItem('@register-list', JSON.stringify(teste))

  };



  return (
    <Container>
      <Header />
      <Form onSubmit={handleSubmit(onSubmit)} id="chamados">

        <select {...register("type")}>
          <option value="Lojista ">Lojista </option>
          <option value=" Colaborador "> Colaborador </option>
          <option value=" Cliente"> Cliente</option>
          <option value=" Terceirizado"> Terceirizado</option>
        </select>

        <strong>Dados da vitima</strong>

        <InputStyle type="text" placeholder="Nome" {...register("name", {})} />

        <DivRow>
          <InputStyle type="number" placeholder="Idade" {...register("age", {})} />

          <label htmlFor="">
            M
            <InputStyle {...register("sexo")} type="radio" value="M" />
          </label>

          <label htmlFor="F">F
            <InputStyle {...register("sexo")} type="radio" value=" F" />
          </label>
        </DivRow>

        <DivRow>
          <InputStyle type="text" placeholder="Rg" {...register("rg", {})} />
          <InputStyle type="text" placeholder="Tel" {...register("phone", {})} />
        </DivRow>

        <DivRow>
          <InputStyle type="text" placeholder="Rua" {...register("street", {})} />
          <InputStyle type="text" placeholder="Numero" {...register("number", {})} />
        </DivRow>

        <DivRow>
          <InputStyle type="text" placeholder="Bairro" {...register("district", {})} />
          <InputStyle type="text" placeholder="Cidade" {...register("city", {})} />
        </DivRow>


        <InputStyle type="text" placeholder="Nome Acompanhante" {...register("escortName", {})} />
        <InputStyle type="number" placeholder="Tel Acompanhante" {...register("escortPhone", {})} />

        <Grid title="CONTROLE DE TEMPO ATENDIMENTO">
          <Div title="Transmissão" id={"transmission"}>
            <InputStyle id="transmission"
              type="datetime-local" placeholder="Transmissão"
              {...register("transmission", {})} />
          </Div>

          <Div title="Chegada" id="arrival">
            <InputStyle
              type="datetime-local"
              placeholder="Chegada " {...register("arrival", {})} />
          </Div>

          <Div title="Saida" id="exit">
            <InputStyle id='exit'
              type="datetime-local"
              placeholder="Saida" {...register("exit", {})} />
          </Div>

          <Div title="Liberação" id="release" >
            <InputStyle id='release'
              type="datetime-local" placeholder="Liberação"
              {...register("release", {})} />
          </Div>
        </Grid>

        <DivRow>
          <InputStyle type="text" placeholder="1°PA" {...register("pa1", { required: false })} />
          <InputStyle type="time" placeholder="hora" {...register("timePa1", {})} />
          <InputStyle type="text" placeholder="2°PA" {...register("pa2", { required: false })} />
          <InputStyle type="time" placeholder="hora-2" {...register("timePa2", {})} />

        </DivRow>

        <DivRow>
          <InputStyle type="text" placeholder="Temperatura" {...register("temperature", { required: false })} />
          <InputStyle type="text" placeholder="Pulso" {...register("pulse", {})} />
          <InputStyle type="text" placeholder="SPO²%" {...register("spo2", { required: false })} />

        </DivRow>

        <textarea {...register("Medicamentos e Hora ministrada", {})} />


        <Button type="submit" />
      </Form>

    </Container>

  );
}