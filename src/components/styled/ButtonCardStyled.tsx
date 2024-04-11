import styled from "styled-components";
import { ButtonStyled } from "./ButtonStyled";

export const ButtonCardStyled = styled(ButtonStyled)`
  background-color: #fff;
  color: #122a57;
  border: 1.5px solid #122a57;
  height: 1.6rem;
  width: 5.5rem;
  font-size: 0.5rem;
  font-weight: 600;

  &:hover{
    background-color: #354d7a;
    color: #fff;
    border: #354d7a;
  }
`;
