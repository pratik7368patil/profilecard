import React from "react";
import "./styling/lastActivity.scss";
import { Typography } from "@material-ui/core";

export default function LastActivity() {
  return (
    <div className="last-act-main">
      <Typography color="secondary" variant="body1" className="last-act-head">
        Last Activity:
      </Typography>
      <Typography color="primary" variant="body1" className="last-act-body">
        68 (-4), The Shire, UK
      </Typography>
    </div>
  );
}
