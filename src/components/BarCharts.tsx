import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { CustomBarTooltip } from "./CustomBarTooltip";

export const BarCharts = ({
  data,
  domain,
  barSize,
  color,
  yAxisTickCount,
}: BarGraphProps) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        barSize={barSize}
        margin={{
          top: 5,
          right: 0,
          left: 0,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="0" horizontal={true} vertical={false} />
        <XAxis
          dataKey="name"
          tickLine={false}
          axisLine={false}
          style={{ fontSize: "11px", fontWeight: 500 }}
          interval={0}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          style={{ fontSize: "13px", fontWeight: 600 }}
          domain={domain}
          tickCount={yAxisTickCount}
        />
        <Tooltip cursor={{ fill: "transparent" }} content={CustomBarTooltip} />
        <Bar
          dataKey="value"
          radius={[2, 2, 0, 0]}
          activeBar={<Rectangle fill="#E37125" width={barSize} />}
        >
          {data.map((payload, index) => {
            return <Cell fill={color[index]} key={payload.name} />;
          })}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

interface BarGraphProps {
  data: { name: string; value: number }[];
  domain: number[];
  barSize: number;
  color: string[];
  yAxisTickCount: number;
}
