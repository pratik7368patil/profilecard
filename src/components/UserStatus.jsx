import React from "react";
import { Divider, Typography } from "@material-ui/core";
import { Circle } from "rc-progress";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import "./styling/userStatus.scss";

export default function UserStatus(props) {
  const { data } = props;
  return (
    <div className="card-status">
      <div className="card-status-head-quality">
        <div>
          <Typography color="secondary" variant="body2">
            Quality
          </Typography>
          <Typography
            color="primary"
            variant="subtitle2"
            className="card-status-numbers"
          >
            {data.quality}
            <KeyboardArrowDownIcon fontSize="small" />
          </Typography>
        </div>
        <div>
          <Circle
            className="progress-circle"
            percent={`${data.quality}`}
            strokeWidth="10"
            trailWidth="10"
            strokeColor="#F43168"
            trailColor="#E6E8EB"
          />
        </div>
      </div>
      <Divider orientation="vertical" flexItem />
      <div className="card-status-head">
        <Typography color="secondary" variant="body2">
          Handicap
        </Typography>
        <Typography
          color="primary"
          variant="subtitle2"
          className="card-status-numbers"
        >
          {data.handicap}
        </Typography>
      </div>
      <Divider orientation="vertical" flexItem />
      <div className="card-status-head">
        <Typography color="secondary" variant="body2">
          SG Total
        </Typography>
        <Typography
          color="primary"
          variant="subtitle2"
          className="card-status-numbers"
        >
          {data.sgTotal}
          <KeyboardArrowDownIcon fontSize="small" />
        </Typography>
      </div>
    </div>
  );
}
