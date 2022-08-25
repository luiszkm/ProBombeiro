import { Div } from "../../components/Div";
import { DivRow } from "../../components/DivRow";
import { Input } from "../../components/Input"; 
import {  InputHook } from "../../components/InputHook"; 
import { Section } from "../../components/Section";
import { Container, Form } from "./styles";

import { useForm } from 'react-hook-form';

import { useEffect } from "react";

export function Home() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    
    console.log(data);
  };
  //console.log(errors);

  



  return (
    <Container>
      <Section title={""}>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <div>

            <Input value="LOJISTA" name="teste" type="radio" />
            <Input value="CLIENTE" name="teste" type="radio" />
            <Input value="COLABORADOR" name="teste" type="radio" />
            <Input value="TERCEIRIZADO" name="teste" type="radio" />

          </div>


          <Div title="Dados da vitima">
         

            <Input type="text"  {...register(`Idade`, {required:false, maxLength: 80})}
              labelName="Idade"
            />
            <Input ype="text" 
              labelName="RG" />
              
            <InputHook />

            <DivRow title="Sexo">
              <Input value="M" name="sexo" type="radio" />
              <Input value="F" name="sexo" type="radio" />
            </DivRow>

            <Div title="Endereço">
              <Input labelName="Rua" />
              <Input labelName="numero" />
              <Input labelName="bairro" />
              <Input labelName="Cidade" />
            </Div>

            <Div title="Dados do Acompanhante">
              <Input labelName="Nome" />
              <Input labelName="Telefone" />
            </Div>

            <Div title="Controle de Atendimento">
              <Input labelName="TRANSMISSÃO" />
              <Input labelName="CHEGADA AO LOCA" />
              <Input labelName="SAÍDA DO LOCAL" />
              <Input labelName="SALA ATENDIMENTO" />
              <Input labelName="LIBERAÇÃO VÍTIMA" />
            </Div>

          </Div>
          <input type="submit" />
        </Form>

      </Section>
    </Container>
  )
}