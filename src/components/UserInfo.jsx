import React from "react";
import UserStatus from "./UserStatus";
import "./styling/userInfo.scss";
import { Typography } from "@material-ui/core";

export default function UserInfo(props) {
  const { data } = props;
  return (
    <div className="card-main-top">
      <div className="avatar"></div>
      <div className="card-head">
        <Typography color="primary" variant="subtitle1">
          {data.name}
        </Typography>
        <Typography color="secondary" variant="body2">
          {data.location}
        </Typography>
        <UserStatus data={data.statusData} />
      </div>
    </div>
  );
}
