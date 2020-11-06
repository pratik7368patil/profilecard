import React from "react";
import {
  YAxis,
  CartesianGrid,
  Tooltip,
  AreaChart,
  Area,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";

import "./styling/graph.scss";
import { Typography } from "@material-ui/core";

export default function Graph(props) {
  const { iniData } = props;
  const [data] = React.useState(iniData);
  const CustomTooltip = ({ active, payload }) => {
    if (active) {
      return (
        <div className="custom-tooltip">
          <Typography className="custom-tooltip-label">
            {payload[0].value}
          </Typography>
        </div>
      );
    }

    return null;
  };

  return (
    <div style={{ width: "100%", height: 165 }}>
      <ResponsiveContainer>
        <AreaChart
          data={data.slice(0, 10)}
          margin={{
            top: 7,
            right: 10,
            left: -30,
            bottom: 30,
          }}
        >
          <defs>
            <linearGradient id="plotValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#007AFF" stopOpacity={0.2} />
              <stop offset="95%" stopColor="#FFFF" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid
            vertical={false}
            strock="#C0C6CB"
            strokeDasharray="5"
          />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <ReferenceLine y={0} stroke="#C0C6CB" />
          <Area
            dot={{
              r: 5,
              fill: "#FFFFFF",
              stroke: "#007AFF",
              strokeWidth: 1,
            }}
            dataKey="value"
            stroke="#007AFF"
            fillOpacity={1}
            fill="url(#plotValue)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
