import { Fragment } from "react/jsx-runtime";
import { Footer } from "../../components/functional/Footer";
import { Header } from "../../components/functional/Header";
import React from "react";
interface DefaultLayoutsProps {
  children: React.ReactNode;
}

export function DefaultLayouts(props: DefaultLayoutsProps) {
  return (
    <Fragment>
      <Header></Header>
      {props.children}
      <Footer></Footer>
    </Fragment>
  );
}
