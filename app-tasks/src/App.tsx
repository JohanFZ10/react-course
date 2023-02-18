import React from "react";
import SharedInputText from "./components/SharedInputText/SharedInputText";
import {
  SharedButton,
  ButtonContainer,
} from "components/SharedButton/SharedButton";
import {
  CiUser,
  CiLock,
  CiBullhorn,
} from "./assets/IconsComponents/IconsReact";
import { Container } from "./style";

function App() {
  return (
    <Container>
      <SharedInputText
        placeholder="Usuario"
        name="user"
        type="text"
        children={<CiUser size={25} />}
      />
      <SharedInputText
        placeholder="Contraseña"
        name="password"
        type="password"
      />
      <SharedInputText placeholder="Nombre" name="name" type="text" />
      <SharedInputText
        placeholder="Dirreccion"
        name="address"
        type="text"
        children={<CiBullhorn size={25} />}
      />
      <ButtonContainer width="100%">
        <SharedButton title="normal" tipo="primary" width="40%" />
        <SharedButton title="primary" tipo="primary" width="40%"/>
      </ButtonContainer>
    </Container>
  );
}

export default App;
