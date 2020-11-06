import React from "react";
import "./styling/horizantalBar.scss";
import { Typography } from "@material-ui/core";

export default function HorizantalBar(props) {
  const { name, iniValue, limit = 3 } = props;
  const [value] = React.useState(iniValue); // setValue can be used if required

  const positiveResult = value > 0 && value <= limit ? (value / limit) * 50 : 0;
  const negativeResult =
    value < 0 && value <= limit ? (-value / limit) * 50 : 0;

  const barStyling = {
    position: "absolute",
    borderRadius: "2px",
    height: "100%",
    transitionProperty: "width",
    transitionDuration: "1.25s",
    transitionTimingFunction: "linear",
    transitionDelay: "0.5s",
  };
  const posiInnerProgressBar = {
    ...barStyling,
    left: "50%",
    width: `${positiveResult}%`, // calc with respect to 50%
    backgroundImage: "linear-gradient(to right, #56a7ff, #007aff)",
  };

  const negInnerProgressBar = {
    ...barStyling,
    right: "50%",
    width: `${negativeResult}%`, // calc with respect to 50%
    backgroundImage: "linear-gradient(to left, #56a7ff, #007aff)",
  };

  return (
    <div className="progress-details-main">
      <Typography color="primary" variant="subtitle2">
        {name}
      </Typography>
      <div className="progress-bar">
        <div className="mid-line" />
        {value > 0 ? (
          <div style={posiInnerProgressBar} />
        ) : (
          <div style={negInnerProgressBar} />
        )}
      </div>
      <Typography color="primary" variant="subtitle2">
        {value.toPrecision(2)}
      </Typography>
    </div>
  );
}
