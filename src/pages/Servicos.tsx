import { Fragment } from "react/jsx-runtime";
import { DefaultLayouts } from "../config/layout/DefaultLayout";
import { MainServicos } from "../components/functional/MainServicos";

export function Servicos() {
  return (
    <Fragment>
      <DefaultLayouts>
        <MainServicos></MainServicos>
      </DefaultLayouts>
    </Fragment>
  );
}
