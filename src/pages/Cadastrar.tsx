import { Fragment } from "react/jsx-runtime";
import { DefaultLayouts } from "../config/layout/DefaultLayout";
import { MainCadastrar } from "../components/functional/MainCadastrar";

export function Cadastrar() {
  return (
    <Fragment>
    <DefaultLayouts>
      <MainCadastrar></MainCadastrar>
    </DefaultLayouts>
  </Fragment>
  );
}
