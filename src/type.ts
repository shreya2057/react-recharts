export type LabelType = {
  title: string;
  description: string;
};

export type PieChartData = {
  name: string;
  value: number;
};

export type PieChartColorsType = {
  start: string;
  end: string;
};

export type LabelPropsType = {
  label: LabelType;
  diameter: string | number;
  topPosition: string | number | object;
};

export type PieChartPropsType = {
  hasLegend: boolean;
  data: PieChartData[];
  colors: PieChartColorsType[];
  label?: { title: string; description: string };
  innerRadius: number;
  outerRadius: number;
  minHeight: number | string | object;
  labelProps?: LabelPropsType;
};

export type LineChartDataType = {
  name: string;
  scholarshipRequest: number;
  admissionRequest: number;
  amt: number;
};
