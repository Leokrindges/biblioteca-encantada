import { FormularioStyled } from "../styled/FormularioStyled";
interface FormularioStyledProps {
  children?: React.ReactNode;
}

export function Formulario(props: FormularioStyledProps) {
  return (
    <FormularioStyled>
      {props.children}
      
    </FormularioStyled>
  );
}
