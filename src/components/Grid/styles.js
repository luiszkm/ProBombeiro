import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 1rem;
  >div{
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;

    >label{
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 1rem;
      
    }
  }
  >h4{
    font-size: 1.4rem;
  }



`