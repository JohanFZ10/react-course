import React from "react";
import { SharedButtonsProps } from "../../constants/types/sharedComponentsProps";
import { Button } from "./style";
import { ButtonContainer } from "./style";

function SharedButton({ title, tipo, width }: SharedButtonsProps) {
  return (
    <Button tipo={tipo} width={width}>
      {title}
    </Button>
  );
}

export { SharedButton, ButtonContainer };
