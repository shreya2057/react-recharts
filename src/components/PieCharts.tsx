import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from "recharts";
import { PieChartPropsType } from "../type";
import { CustomLegends } from "./CustomLegends";
import { PieChartPointer } from "./PieChartPointer";

export const PieCharts = ({
  hasLegend,
  innerRadius,
  outerRadius,
  data,
  nonGradColors,
}: PieChartPropsType) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          activeIndex={-1}
          inactiveShape={<PieChartPointer />}
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          dataKey="value"
        >
          {data.map((_, index) => (
            <Cell
              key={`cell-${index}`}
              fill={nonGradColors && nonGradColors[index]}
            />
          ))}
        </Pie>
        {hasLegend && (
          <Legend
            content={CustomLegends}
            layout="vertical"
            verticalAlign="bottom"
            align="center"
          />
        )}
      </PieChart>
    </ResponsiveContainer>
  );
};
