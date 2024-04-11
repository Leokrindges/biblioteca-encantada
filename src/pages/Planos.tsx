import { Fragment } from "react/jsx-runtime";
import { DefaultLayouts } from "../config/layout/DefaultLayout";
import { MainPlanos } from "../components/functional/MainPlanos";

export function Planos(){
    return (
      <Fragment>
      <DefaultLayouts>
        <MainPlanos></MainPlanos>
      </DefaultLayouts>
    </Fragment>
      );
}