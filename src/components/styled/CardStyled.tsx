import styled from "styled-components";

interface CardStyled {
  displayFlex?: "flex" | "block";
  alignItens?: "start" | "center" | "end";
  flexDirection?: "column" | "column-reverse" | "row" | "row-reverse";
  justifyContent?: "start" | "center" | "end";
  borderColor?: string;
  borderSize?: string;
  borderLinha?: "solid" | "none";
}

export const CardStyled = styled.div<CardStyled>`
  width: 100%;
  height: 200px;
  display: ${(props) => props.displayFlex ?? "block"};
  align-items: ${(props) => props.alignItens};
  flex-direction: ${(props) => props.flexDirection ?? "row"};
  justify-content: ${(props) => props.justifyContent};
  gap: 10px;
  border: ${(props) => props.borderLinha} ${(props) => props.borderSize}  ${(props) => props.borderColor};
  img {
    width: 65%;
  }
`;
