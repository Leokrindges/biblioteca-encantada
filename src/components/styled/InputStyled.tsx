import styled from "styled-components";

interface ImputStyledProps {
  heigth?: string;
}

export const InputStyled = styled.input<ImputStyledProps>`
  width: 100%;
  border-radius: 08px;
  border: solid 1.5px #425717;
  margin-bottom: .3rem;
  height: ${(props) => props.height ?? "21px"};
  font-size: .5rem;
  padding-left: 5px;
`;