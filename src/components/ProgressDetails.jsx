import React from "react";
import HorizantalBar from "./HorizantalBar";

export default function ProgressDetails(props) {
  const { horizantalBarData } = props;
  return horizantalBarData.map((item) => (
    <HorizantalBar name={item.name} key={item.name} iniValue={item.value} />
  ));
}
