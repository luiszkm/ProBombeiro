import styled from 'styled-components'

export const Container = styled.header`
  grid-area:header;
  height: 10rem;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800}; 
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8rem;
/* 
  position: fixed;
  top: 0;
  left: 0;
  z-index: 444;  */
  @media(max-width:768px){
    padding: 0 2rem ;
  }
  >nav ul {
    display: flex;
    align-items: center;
    gap: 2rem;
    >a{
      color: white;

    }
  }
`
export const Profile = styled.div`
  display: flex;
  align-items: center;
  >img{
    width:6rem;
    height:6rem;
    border-radius:50%;
  }
  >div{
    display: flex;
    flex-direction: column;
    margin-left: 1.6rem;
    line-height: 2.4rem;
    span{
      font-size: 1.4rem;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
    strong{
      font-size: 1.8rem;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`

export const Logout = styled.button`
  border: none;
  background:none;
  >svg{
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 3.6rem;
  }
  
`