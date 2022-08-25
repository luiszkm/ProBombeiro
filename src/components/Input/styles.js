import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 3rem;
  border: 1px solid black;
  margin-bottom: 1rem;
  padding: 1rem;
  width: 100%;
  >input{
    width: 100%;
    padding:0 1rem;

  }
  >label{
   max-width: max-content;
   width: 100%;
   padding-right: 1rem;
   text-transform: lowercase;

  }

`