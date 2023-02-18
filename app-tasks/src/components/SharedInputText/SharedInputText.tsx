import React from "react";
import { SharedInputsProps } from "../../constants/types/sharedComponentsProps";
import { Inputtext, ContainerInput } from "./style";

function SharedInputText({
  placeholder,
  name,
  type,
  children,
}: SharedInputsProps) {
  return (
    <ContainerInput>
      {children}
      <Inputtext placeholder={placeholder} name={name} type={type} />
    </ContainerInput>
  );
}

export default SharedInputText;
