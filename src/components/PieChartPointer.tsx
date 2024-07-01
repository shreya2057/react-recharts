import { Sector } from "recharts";

export const PieChartPointer = (props: Record<string, number | string>) => {
  const RADIAN = Math.PI / 180;
  if ("payload" in props) {
    const {
      cx,
      cy,
      midAngle,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      fill,
      name,
      value,
    } = props;
    const sin = Math.sin(-RADIAN * Number(midAngle));
    const cos = Math.cos(-RADIAN * Number(midAngle));
    const sx = Number(cx) + Number(outerRadius) * cos;
    const sy = Number(cy) + Number(outerRadius) * sin;
    const mx = Number(cx) + (Number(outerRadius) + 30) * cos;
    const my = Number(cy) + (Number(outerRadius) + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? "start" : "end";

    return (
      <g>
        <Sector
          cx={Number(cx)}
          cy={Number(cy)}
          innerRadius={Number(innerRadius)}
          outerRadius={Number(outerRadius)}
          startAngle={Number(startAngle)}
          endAngle={Number(endAngle)}
          fill={`${fill}`}
        />
        <path
          d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
          stroke={`${fill}`}
          fill="none"
        />
        <circle cx={ex} cy={ey} r={2} fill={`${fill}`} stroke="none" />
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          textAnchor={textAnchor}
          fill="#333"
          fontWeight={"bold"}
          style={{ wordBreak: "break-word", whiteSpace: "wrap" }}
        >
          {name}
          {"  "}
          {value}
        </text>
      </g>
    );
  }
};
