import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  height: 3rem;
  margin-bottom: 1rem;
  padding: 1rem;
  width: 100%;
  >input{
    width: 100%;
    padding: 1rem;
    border-radius: 5px;
  }
  >label{
   max-width: max-content;
   width: 100%;
   padding-right: 1rem;
   text-transform: lowercase;

  }

`