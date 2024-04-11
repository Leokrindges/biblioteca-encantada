import { Fragment } from "react/jsx-runtime";
import { DefaultLayouts } from "../config/layout/DefaultLayout";
import { MainHome } from "../components/functional/MainHome";

export function Home() {
  return (
    <Fragment>
      <DefaultLayouts>
        <MainHome></MainHome>
      </DefaultLayouts>
    </Fragment>
  );
}
