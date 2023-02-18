import styled from "styled-components";
import { SharedInputsProps } from "constants/types/sharedComponentsProps";

export const Inputtext = styled.input<SharedInputsProps>`
  width: 90%;
  padding: 8px;
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 14px;
`;

export const ContainerInput = styled.div`
  display: flex;
  background-color: #fff;
  width: 70%;
  margin: 0 auto;
  padding: 10px;
  margin-top: 15px;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
`;
