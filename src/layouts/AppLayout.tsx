import * as React from "react";
import "./style.scss";

export default function AppLayout(props: any) {
  return <div id="app-container">{props?.children}</div>;
}
