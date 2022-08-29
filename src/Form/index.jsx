import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { DivRow } from '../../components/DivRow';
import { Div } from '../../components/Div';
import { Grid } from '../../components/Grid';

import { Form, InputStyle, Button, Container } from "./styles"
import { Header } from '../../components/Header';

export function FormPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = data => {
    //alert(JSON.stringify(data))
    alert("Registro cadastrado com sucesso!")
    localStorage.setItem('@register-list', JSON.stringify(DataTransfer))

  };
  //console.log(errors);



  return (
    <Container>
      <Header />
      <Form onSubmit={handleSubmit(onSubmit)} id="chamados">

        <select {...register("Tipo")}>
          <option value="Lojista ">Lojista </option>
          <option value=" Colaborador "> Colaborador </option>
          <option value=" Cliente"> Cliente</option>
          <option value=" Terceirizado"> Terceirizado</option>
        </select>

        <strong>Dados da vitima</strong>

        <InputStyle type="text" placeholder="Nome" {...register("Nome", {})} />

        <DivRow>
          <InputStyle type="number" placeholder="Idade" {...register("Idade", {})} />

          <label htmlFor="">
            M
            <InputStyle {...register("Sexo")} type="radio" value="M" />
          </label>

          <label htmlFor="F">F
            <InputStyle {...register("Sexo")} type="radio" value=" F" />
          </label>
        </DivRow>

        <DivRow>
          <InputStyle type="text" placeholder="Rg" {...register("Rg", {})} />
          <InputStyle type="text" placeholder="Tel" {...register("Tel", {})} />
        </DivRow>

        <DivRow>
          <InputStyle type="text" placeholder="Rua" {...register("Rua", {})} />
          <InputStyle type="text" placeholder="Numero" {...register("Numero", {})} />
        </DivRow>

        <DivRow>
          <InputStyle type="text" placeholder="Bairro" {...register("Bairro", {})} />
          <InputStyle type="text" placeholder="Cidade" {...register("Cidade", {})} />
        </DivRow>


        <InputStyle type="text" placeholder="Nome Acompanhante" {...register("Nome Acompanhante", {})} />
        <InputStyle type="number" placeholder="Tel Acompanhante" {...register("Tel Acompanhante", {})} />

        <Grid title="CONTROLE DE TEMPO ATENDIMENTO">
          <Div title="Transmissão" id={"transmission"}>
            <InputStyle id="transmission"
              type="datetime-local" placeholder="Transmissão"
              {...register("Transmissão", {})} />
          </Div>

          <Div title="Chegada" id="arrival">
            <InputStyle
              type="datetime-local"
              placeholder="Chegada " {...register("Chegada ", {})} />
          </Div>

          <Div title="Saida" id="exit">
            <InputStyle id='exit'
              type="datetime-local"
              placeholder="Saida" {...register("Saida", {})} />
          </Div>

          <Div title="Liberação" id="release" >
            <InputStyle id='release'
              type="datetime-local" placeholder="Liberação"
              {...register("Liberação", {})} />
          </Div>
        </Grid>

        <DivRow>
          <InputStyle type="text" placeholder="1°PA" {...register("1°PA", { required: true })} />
          <InputStyle type="time" placeholder="hora" {...register("hora", {})} />
          <InputStyle type="text" placeholder="2°PA" {...register("2°PA", { required: true })} />
          <InputStyle type="time" placeholder="hora-2" {...register("hora-2", {})} />

        </DivRow>

        <DivRow>
          <InputStyle type="text" placeholder="Temperatura" {...register("Temperatura", { required: true })} />
          <InputStyle type="text" placeholder="Pulso" {...register("Pulso", {})} />
          <InputStyle type="text" placeholder="SPO²%" {...register("SPO²%", { required: true })} />

        </DivRow>

        <textarea {...register("Medicamentos e Hora ministrada", {})} />


        <Button type="submit" />
      </Form>

    </Container>

  );
}