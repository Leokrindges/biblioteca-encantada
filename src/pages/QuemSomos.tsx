import { Fragment } from "react/jsx-runtime";
import { DefaultLayouts } from "../config/layout/DefaultLayout";
import { MainQuemSomos } from "../components/functional/MainQuemSomos";

export function QuemSomos() {
  return (
    <Fragment>
      <DefaultLayouts>
        <MainQuemSomos></MainQuemSomos>
      </DefaultLayouts>
    </Fragment>
  );
}
