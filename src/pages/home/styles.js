import styled from "styled-components";

export const Container = styled.div`
padding: 1rem;

`



export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  border:  1px solid black;
  padding: 1rem;

  >div:first-child{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width:100% ;
    gap: 1rem;
    padding: .5rem;
  }
 

`