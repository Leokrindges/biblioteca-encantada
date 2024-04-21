import { CardStyled } from "../styled/CardStyled";

interface CardProps {
  children?: React.ReactNode;
  borderColor?: string;
  borderSize?: string;
  borderLinha?: "solid" | "none";
}

export function Card(props: CardProps) {
  return (
    <CardStyled
      displayFlex="flex"
      alignItens="center"
      justifyContent="center"
      flexDirection="column"
      borderColor={props.borderColor}
      borderSize={props.borderSize}
      borderLinha={props.borderLinha}
    >
      {props.children}
    </CardStyled>
  );
}
