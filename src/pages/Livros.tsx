import { Fragment } from "react/jsx-runtime";
import { DefaultLayouts } from "../config/layout/DefaultLayout";
import { MainLivros } from "../components/functional/MainLivros";

export function Livros() {
  return (
    <Fragment>
      <DefaultLayouts>
        <MainLivros></MainLivros>
      </DefaultLayouts>
    </Fragment>
  );
}
