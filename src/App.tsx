import { Fragment } from "react";
import { AppRoutes } from "./config/routes/AppRoutes";
import { GlobalStyle } from "./config/global/GlobalStyle";

export function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <AppRoutes />
    </Fragment>
  );
}
