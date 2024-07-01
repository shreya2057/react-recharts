import { VStack } from "@chakra-ui/react";
import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from "recharts";
import { PieChartPropsType } from "../type";
import { CustomLabel } from "./CustomLabel";
import { CustomLegends } from "./CustomLegends";

export const PieChartWithGap = ({
  hasLegend,
  innerRadius,
  outerRadius,
  data,
  colors,
  minHeight,
  labelProps,
}: PieChartPropsType) => {
  return (
    <VStack
      width={"100%"}
      height={"100%"}
      position={"relative"}
      minHeight={minHeight}
      pt={4}
    >
      {labelProps && <CustomLabel {...labelProps} />}
      <ResponsiveContainer
        width="100%"
        height="100%"
        style={{ position: "relative" }}
      >
        <PieChart style={{ display: "flex", gap: "10px" }}>
          <defs>
            {data.map((_, index) => (
              <linearGradient id={`linear-gradient${index}`}>
                <stop
                  offset="0%"
                  stopColor={colors && colors[index % colors.length].start}
                />
                <stop
                  offset="100%"
                  stopColor={colors && colors[index % colors.length].end}
                />
              </linearGradient>
            ))}
          </defs>
          <Pie
            data={data}
            innerRadius={innerRadius}
            outerRadius={outerRadius}
            paddingAngle={2}
            dataKey="value"
            cornerRadius={14}
          >
            {data.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={`url(#linear-gradient${index})`}
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
    </VStack>
  );
};
