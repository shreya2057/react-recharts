import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { LineChartDataType } from "../type";
import { CustomLegends } from "./CustomLegends";

export const LineCharts = ({
  data,
  colors,
  dataKey,
}: {
  data: LineChartDataType[];
  colors: string[];
  dataKey: string[];
}) => {
  console.log(dataKey);
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis
          dataKey="name"
          axisLine={false}
          tickLine={false}
          padding={{ left: 30 }}
        />
        <YAxis axisLine={false} tickLine={false} />
        <Legend
          content={<CustomLegends />}
          layout="centric"
          verticalAlign="top"
          align="right"
        />
        <Line
          type="monotone"
          dataKey={dataKey[0]}
          stroke={colors[0]}
          strokeWidth={"2px"}
          dot={false}
        />
        <Line
          type="monotone"
          dataKey={dataKey[1]}
          stroke={colors[1]}
          strokeWidth={"2px"}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};
