import { RiShutDownLine } from 'react-icons/ri';

import { Container, Profile, Logout } from "./styles";
import {Link} from "react-router-dom"
export function Header() {

  return (

    <Container>
      <Profile to="/profile">
        <img
          alt={`foto do(a)`} />
        <div>
          <span>{`Bem Vindo !`}</span>
          <strong></strong>
        </div>
      </Profile>
      <nav>
        <ul>
          <Link to ="/"><li>Home</li></Link>
          <Link to ="/records"><li>cadastros</li></Link>
        </ul>
      </nav>
      <Logout >
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}