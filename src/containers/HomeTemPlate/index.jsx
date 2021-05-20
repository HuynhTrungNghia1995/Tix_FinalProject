import React from "react";
import { Route } from "react-router";
import NavbarHome from '../../components/NavbarHome'
function LayoutHome(props) {
  return <>
    <NavbarHome />
    {props.children}
  </>;
}

export default function HomeTemplate({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={(propsComponent) => (
        <LayoutHome>
          <Component {...propsComponent} />
        </LayoutHome>
      )}
    />
  );
}
